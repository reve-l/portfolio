
const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')

const server = jsonServer.create()
//const router = jsonServer.router('./database.json')
const router = jsonServer.router('./db.json')

const userdb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'))

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(jsonServer.defaults());

const SECRET_KEY = '123456789'

const expiresIn = '1h'

// Create a token from a payload 
function createToken(payload){
  return jwt.sign(payload, SECRET_KEY, {expiresIn})
}

// Verify the token 
function verifyToken(token){
  return  jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ?  decode : err)
}

// Check if the user exists in database
function isAuthenticated({email, password}){
  return userdb.users.findIndex(user => user.email === email && user.password === password) !== -1
  //en d'autres mots est-ce que la recherche est différente de -1 ?? ie esce qu'on a trouvé qlq chose?
  //si resultat -1 alors NON TROUVE! 
  //si != -1 alors TROUVE!
}

// get username if exists
function getUserName(email, password){
  const username = (userdb.users.findIndex(user => user.email === email && user.password === password) !== -1)?
    userdb.users.map((item, i) => {return item.prenom.toString() })
  :'';
  console.log("USERNAME: ",username.toString())


  
  //en d'autres mots est-ce que la recherche est différente de -1 ?? ie esce qu'on a trouvé qlq chose?
  //si resultat -1 alors NON TROUVE! 
  //si != -1 alors TROUVE!
}


// Register New User
server.post('/auth/register', (req, res) => {
    console.log("register endpoint called; request body:");
    //console.log(req.body);
    const {email, password} = req.body;

    if(isAuthenticated({email, password}) === true) {
        const status = 401;
        const message = 'Email and Password already exist';
        res.status(status).json({status, message});
        return
    }

    fs.readFile("./users.json", (err, data) => {  
        if (err) {
        const status = 401
        const message = err
        res.status(status).json({status, message})
        return
        };

        // Get current users data
        var data = JSON.parse(data.toString());

        // Get the id of last user
        var last_item_id = data.users[data.users.length-1].id;

        //Add new user
        data.users.push({id: last_item_id + 1, email: email, password: password}); //add some data
        var writeData = fs.writeFile("./users.json", JSON.stringify(data), (err, result) => {  // WRITE
            if (err) {
            const status = 401
            const message = err
            res.status(status).json({status, message})
            return
            }
        });
    });

    // Create token for new user
    const access_token = createToken({email, password})
    console.log("Access Token:" + access_token);
    res.status(200).json({access_token})
})



// Login to one of the users from ./users.json
server.post('/auth/login', (req, res) => {

        console.log("login endpoint called; request body:");
       // console.log(req.body);

        const {email, prenom, password} = req.body;

        //if (isAuthenticated({email, password}) === false) { si isAuthentificated est egal à -1 ça veut dire RIEN TROUVE donc false
        if (!isAuthenticated({email, password})) {        

            const status = 401
            const message = 'Incorrect email or password'
            res.status(status).json({status, message})
            return
        }

        const username = (userdb.users.findIndex(user => user.email === email && user.password === password) !== -1)?userdb.users.map((item, i) => {return item.prenom.toString() }):'';
        const access_token = createToken({email, password})
        //console.log("username",username.toString())
        //console.log("Access Token:" + access_token);

        res.status(200).json({access_token,username})
})




////Ajouter ensuite un middleware Express qui vérifie que l'en-tête d'autorisation a le système Bearer puis vérifie si le jeton est valable pour toutes les routes à l'exception de la route précédente puisque c'est celui que nous utilisons pour connecter les utilisateurs.
/*server.use(/^(?!\/auth).*$/,  (req, res, next) => {
    if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
        const status = 401
        const message = 'Error in authorization format'
        res.status(status).json({status, message})
        return
    }
    try {
        let verifyTokenResult;
        verifyTokenResult = verifyToken(req.headers.authorization.split(' ')[1]);

        if (verifyTokenResult instanceof Error) {
        const status = 401
        const message = 'Access token not provided'
        res.status(status).json({status, message})
        return
        }
        next()
    } catch (err) {
        const status = 401
        const message = 'Error access_token is revoked'
        res.status(status).json({status, message})
    }
})
*/






server.use(router)

server.listen(4000, () => {
  console.log('Run Auth API Server on port 4000')
})


// c:react\revel\Server     npm run start-auth pour démarrer à partir du fichier sezrver.js  et npm start pour démarrer à partir de package.json



//C'est ça vous avez maintenant une API protégée. Ajoutons deux scripts
// npm pour exécuter le serveur
//Ouvrez votre package.jsonfichier puis ajouter ces deux scripts
/*
  "scripts": {
    "start": "json-server --watch ./db.json",
    "start-auth": "node server.js"
  },
*/
//Le script de démarrage exécute json-server normalement sans aucune authentification
//Le start-auth gère notre server.js Scénario
//npm run start-auth
