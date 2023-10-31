//import logo from './logo.svg';
//import './App.css';

import './assets/css/style.css';
//import 'animate.css';

//import { fab } from '@fortawesome/free-brands-svg-icons' 

import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';



// import your icons
import { faCoffee,faQuoteLeft,faQuoteRight,faHandshake,faUsers } from '@fortawesome/free-solid-svg-icons'
import { faGithub,faSkype,faFacebook,faGoogle,faInstagram,faAddressCard } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import revel from "./assets/images/revel.jpg";
import srvices from "./assets/images/srvices.png";

import realisations from "./assets/images/realisations.png";
import contact from "./assets/images/contact.png";
import technologies from "./assets/images/technologies.png";
import aboutrevel from "./assets/images/aboutrevel.png";

import interfacehome3 from "./assets/images/interfacehome3.PNG";
import interfacehome1 from "./assets/images/interfacehome1.PNG";
import hominterfac from "./assets/images/hominterfac.PNG";

import reveltechno from "./assets/images/reveltechno.jpeg";

import mcsas from "./assets/images/mcsas.png";
import cehhack from "./assets/images/cehhack.png";
import ccnpsec from "./assets/images/ccnpsec.png";
import dabi from "./assets/images/dabi.png";
import deleee from "./assets/images/deleee.png";
import toefl from "./assets/images/toefl.png";
import hskk from "./assets/images/hskk.png";

import usericonperso from "./assets/images/person.png";

import Button from '@mui/material/Button';
import Connectez from './Connectez';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';


function Home() {

  const url="http://localhost:4000/posts";

  const [open, setOpen] = React.useState(false);
  const initialValue = {title:"", author:""};
  const [tableData,setTableData]=useState(null);

  const [formData, setFormData] = useState(initialValue);

  const user = false;


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange=(e)=>{
    const {value,id}=e.target;
    setFormData({...formData,[id]:value});
    //console.log(value,id); 
  };

  const handleFormSubmit = () => {

    if(formData.id){
      const confirm=window.confirm("VOULEZ-VOUS VRAIMENT MODIFIER CETTE LIGNE????");

        confirm && fetch(url+`/${formData.id}`,
          {method:"PUT", body:JSON.stringify(formData), headers:{'content-type':"application/json"}}
        )
        .then(response => response.json())
        .then(response =>{
          handleClose()
          getUsers()
        }
        ) 
    }else{
          fetch(url,
            {method:"POST", body:JSON.stringify(formData), headers:{'content-type':"application/json"}}
          )
          .then(response => response.json())
          .then(response =>{
            handleClose()
            getUsers()
            setFormData(initialValue)}
          ) 
    }


  };

  const handleDelete = (id) => {
    const confirm=window.confirm("SUPPRIMER????",id)
    if(confirm){
        fetch(url+`/${id}`,
        {method:"DELETE"})
        .then(response => response.json())
        .then(response =>{getUsers()}
    )
    }
  };


  const handleUpdate = (data) => {
    //console.log(data);
    setFormData(data);
    handleClickOpen();
  };


  
  const ButtonActions = (props) => {
    /*const invokeParentMethod = () => {
      props.context.methodFromParent(
        `Row: ${props.node.rowIndex}, Col: ${props.colDef.field}`
      );
    };*/
  
    return (
      <span className='action-col'>
        <Button
          //style={{ height: 20, lineHeight: 0.5 }}
          onClick={() =>handleDelete(props.value)}
          //className="btn btn-info"
        >
          <DeleteForeverIcon />
        </Button>
        <Button
          //style={{ height: 20, lineHeight: 0.5 }}
          //onClick={() =>handleUpdate(props.value)}
          //className="btn btn-info"
          onClick={() =>handleUpdate(props.data)}
        >
          <EditIcon />
        </Button>
      </span>
    );
  };


    // Example load data from server
    useEffect(() => {
      getUsers();
      //fetch('http://localhost:4000/posts')
      //.then(result => result.json())
      //.then(response => response.json())
      //.then(data=>{
        //  gridOptions.api.setRowData(data);
      //})
      //.then(rowData => setRowData(rowData))
    }, []);
    const getUsers=()=>{
      fetch(url)
      .then(response => response.json())
      .then(response => setTableData(response))
    }





  return (
    <div className="">
              <header className="container head h-100">
                <div className="row head-1">
                  <div className="col-6">
                    <div className="head-1-g pt-3" id="head-g">
                      <img src={revel} alt="revel" className="img-fluid"/>
                 
                    </div>
                  </div>
                  <div className="col-6  d-flex flex-column justify-content-center">
                    <div className="port">
                      <span className="head-1-d-t">portfolio</span>
                      <div className="head-1-d">
                        <h1>REVEL</h1>
                        <h6><span> Web Developper</span></h6>
                      </div>
                    </div>
                  
                    <div className="head-1-d-p">
                      <p>Html5|Css3|Bootstrap5|Material UI|Materialize css|React js|React  Native|Node JS|Jquery|Vs Code|Wordpress|Github|Mysql|Sql yog|Sql Server|Management Studio|Mongo DB|Golang|Spring boot|Jaspert|Spring Boot|Java</p>
                    </div>
                  </div>
                </div>
                <div className="row head-2">
                  <div className="l-menu">
                    <a href="#myservices">
                      <div className="l-menu-h"><img src={srvices} alt="services"/></div>
                      <h6 className="l-menu-t">Services</h6>
                    </a>
                  </div>
                  <div className="l-menu">
                    <a href="#travaux">
                      <div className="l-menu-h"><div><img src={realisations} alt="realisations"/></div></div>
                      <h6 className="l-menu-t">Mes Travaux</h6>
                    </a>
                  </div>
                  <div className="l-menu">
                    <a href="#ctact-me">
                      <div className="l-menu-h"><div><img src={contact} alt="contact"/></div></div>
                      <h6 className="l-menu-t">Contactez moi</h6>
                    </a>
                  </div>
                  <div className="l-menu">
                    <a href="#tech">
                      <div className="l-menu-h"><div><img src={technologies} alt="technologies"/></div></div>
                      <h6 className="l-menu-t">Mes Technos</h6>
                    </a>
                  </div>
                  <div className="l-menu">
                    <a href="#moi">
                      <div className="l-menu-h"><div><img src={aboutrevel} alt="About revel"/></div></div>
                      <h6 className="l-menu-t">About me</h6>
                    </a>
                  </div>
                </div>
              </header>

              <div className="container">

                  <section className="row myservices" id='myservices'>

                        <div className="row mb-5 r-title">
                          <div className="col-12 text-center">
                            <div className="myservices-t">
                              <h1>Mes <span>services</span> </h1>
                            </div>
                          </div>
                        </div>

                        <div className="row mb-1">
                          <article className="col-6">
                            <div className="s-item s-item-1"><p>Développement d'application FullStack avec React JS et Mongo DB, MySql</p><img src={hominterfac} alt=""/></div>
                          </article>
                          <article className="col-6">
                            <div className="s-item s-item-2"><p>Développement d'application mobile avec React Native</p><img src={hominterfac} alt=""/></div>
                          </article>
                          <article className="col-6">
                            <div className="s-item s-item-3"><p>Développement d'application web avec Java Spring Boot</p><img src={hominterfac} alt=""/></div>
                          </article>
                          <article className="col-6 mb-1">
                            <div className="s-item s-item-4"><p>Développement de sites web et thèmes Wordpress</p><img src={hominterfac} alt=""/></div>
                          </article>
                        </div>

                        <div className="row mb-1">
                          <article className="col-6">
                            <div className="b-item s-item-5"><p>Administration des BD Mysql et SQL Server 2012 </p><img src={interfacehome1} alt=""/></div>
                          </article>
                          <article className="col-6">
                            <div className="b-item s-item-6"><p>Conception de Systèmes Décisionnels avec Sql Server 2012</p> <img src={interfacehome1} alt=""/></div>
                          </article>
                          <article className="col-6">
                            <div className="b-item s-item-7"><p>Conception des états avec Jaspertsoft Ireport Designer 5.x</p> <img src={interfacehome1} alt=""/></div>
                          </article>
                          <article className="col-6">
                            <div className="b-item s-item-8"><p>Développement d'application avec Node JS | Spring Boot | Golang  comme backend</p> <img src={interfacehome1} alt=""/></div>
                          </article>
                        </div>

                        <div className="row">
                          <article className="col-6">
                            <div className="b-item s-item-9"><p>Hetical Hacking</p> <img src={interfacehome3} alt=""/></div>
                          </article>
                          <article className="col-6">
                            <div className="b-item s-item-10"><p></p>Analyse et Conception UML | MERISE <img src={interfacehome3} alt=""/></div>
                          </article>
                          <article className="col-6">
                            <div className="b-item s-item-11"><p></p>Gestion de projet Informatique avec SCRUM - Méthodes Argiles <img src={interfacehome3} alt=""/></div>
                          </article>
                          <article className="col-6">
                            <div className="b-item s-item-12"><p></p>Redaction cahier de charges sites et applications web <img src={interfacehome3} alt=""/></div>
                          </article>
                        </div>
                  </section>

                  
                  
                  
                  <section className="row ctact-me pt-5" id='ctact-me'>
                  
                    <article className="col ctact-me-g">

                      <h1>Contactez moi <span>directement...</span></h1> 
                      <p>Vous pouvez m'écrire directement à l'aide du formulaire ci-dessous et je recevrai le message par notification, ou bien le faire à partir des liens sociaux à votre droite. 
                      <p className='mt-2'>Pour m'écrire il faut se connecter,</p> pour se connecter il vous suffit de cliquer sur le bouton "se connecter"</p>
                      <p>Sinon si vous n'êtes pas encore abonné faîtes le lorsque vous cliquez sur le bouton "se connecter" ci-dessous</p>
 
                      <p className="btn btn-info usercon"><img src={usericonperso} alt="users" className="img-fluid"/>
                      {user?<span className='user-f-c' data-title="Déconnectez-vous">REVEL</span>  : <a className="conn"><span className="badge badge-light seconnect" onClick={handleClickOpen}>se connecter</span></a>
}         
                        
                        <Connectez open={open} handleClose={handleClose} data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} />

                        </p>         
                      <form action="" className="ctact-me-form">


                        <div className="_input2 text-center">
                          <input type="text" name="" id="emai" placeholder="" className="" />
                          <label for="emai" className="_label">Objet</label>
                        </div>

                        <div className='text-center'>
                          <label for="text" className="_label text-center">Message</label>
                          <textarea name="" id="" cols="30" rows="10"></textarea>
                          <div>
                            <button className="send-ctact-btn">Envoyer</button>
                          </div>
                        </div>           
                      </form>

                    </article>
                    <div className="col ctact-me-c">
                      <p> &nbsp; J'attend... &nbsp;  <FontAwesomeIcon icon={faCoffee} className=''/></p>
                      <br/><p>     </p>
                    
                    </div>
                    
                    <article className="col ctact-me-d f-social-ctact">
                          <h6 className="social-ctact-t text-center"> me joindre à travers mes plateformes sociales</h6>

                          <a href="" className="button ww">
                            <div className='icone'><FontAwesomeIcon icon={faGithub}  /></div>
                            <span>github.com/reve-l</span>
                          </a> 
                          <a href="" className="button mm">
                            <div className='icone'><FontAwesomeIcon icon={faFacebook} /></div>
                            <span>Facebook.com/REVEL</span>
                          </a>
                          <a href="" className="button ss">
                            <div className='icone'><FontAwesomeIcon icon={faSkype} /></div>
                            <span>skype.com/REVEL</span>
                          </a>
                          <a href="" className="button gg">
                            <div className='icone'><FontAwesomeIcon icon={faGoogle} /></div>
                            <span>md40revel@gmail.com</span>
                          </a>
                          <a href="" className="button ii">
                            <div className='icone'><FontAwesomeIcon icon={faInstagram} /></div>
                            <span>instagram.com/40revel</span>
                          </a>            
                    </article>

                  </section>

                  <section className="row tech mt-5" id='tech'>
                    <article className="col tech-g">
                      <div id="orbit-container">
                        <div className="orbit-1"></div>
                        <div className="orbit-2"></div>
                        <div className="orbit-3"></div>
                        <div className="orbit-4"></div>
                        <div className="orbit-5"></div>
                        <div className="orbit-6"></div>
                        <div className="orbit-7">Mes Technos</div>
                      </div>
                    </article>
                    
                    <article className="col tech-d d-flex justify-content-center align-items-center">
                      <div className="tech-d-d">
                        <img src={reveltechno} alt="revel" className="img-fluid"/>           
                        <div className="tech-d-t">
                          <div className="tech-d-t-f">Revel</div>
                          
                        </div>
                      </div>
                    </article>
                  
                  </section>


                  <section className="row moi" id='moi'>
                    <div className='container'>
                      <div className="row mb-5 r-title">
                            <div className=" text-center">
                              <div className="myservices-t">
                                <h1>A propos <span>de moi</span> </h1>
                              </div>
                            </div>
                        

                            <article className=" moi-txt">
                            
                    
                                <p>
                                  Nous nous appellons OKONG REVEL DIDIER passionné passionné mais alors passionné de l'Informatique, des Technologies globalement, et surtout surtout du Développement des Logiciels.
                                  Nous sommes passé normalement par un Baccalauréat C (Mathématiques et Sciences Physiques), puis un Diplôme Universitaire de Technologie (DUT) en Génie Informatique obtenu à l'Institut Universitaire de Technologie (IUT) de Ngaoundéré au Cameroun,
                                  d'une Licence en Génie Logiciel obtenue transversalement entre l'IUT FV de Bandjoun et l'Instiut Siantou. Nous avons également brillement passé le concours de l'Ecole Normal Supérieur de l'Enseignement (ENSET) de Douala où nous avons fait Electronique sans finir le curcus, et passé aussi brillement le concours de de l'Institut Universitaire de Technologie (IUT) de Douala option Génie Logiciel sans finir une fois de plus le parcours, et également Mathématiques Pures à l'Université de Yaoundé 1 sans finir aussi le parcours.
                                  Nous sommes dans la Programmation et le Développement d'applications depuis près de 13 ans. Entre autres il faut noter que nous sommes également un passionné de l'Agriculture plus précisemment la culture de la Banane Plantain, de la petite Kola et de l'OKOK (Gnetum, Eru), raison pour laquelle nous avons mis
                                  en place une une vaste plantation de Banane Plantain et un foyer d'okok et même plusieurs arbres fruitiers.
                                  Une autre chose qui nous passionne énormement, c'est l'Entrepreunariat et le Management, la découverte des cultures du monde, et l'apprentissage des langues aussi, et encore plus la musique de la très bonne musique Christique.
                                  Le social également nous préoccupe énormement, venir en aide aux démunis, aux orphelins aux enfants de la rue, aux gens en difficultés, penser aussi qu'il y a des êtres humains pas 
                                  loin de soi qui ont besoin de vivre également, bref de la miséricorde-la tolérance-la justice.
                                  Au délà de tout JESUS-CHRIST ./-
                                </p>
                                    
                            </article>
                      </div>

                    </div>

                  </section>

                  <section className="row travaux" id='travaux'>
                  <h1>Mes travaux</h1>
                  <h5>Je ne mets ici que les plus ressent des petits travaux publics, ceux disposant de l'étiquette private sont confidentiels</h5>
                  <div className='cardr-all'>
                      <a href="https://github.com/reve-l/server_react_hooks_crud_axios-spring-">
                          <div className='cardr'>
                            <h6><FontAwesomeIcon icon={faCoffee} className='cardr-font'/>Server_react_hooks_crud_axios-spring</h6>
                            <p>serveur spring du projet react jooks crud</p>
                            <footer><div className='ball'></div>Javascript</footer>
                          </div>
                      </a>
                      <a href="https://github.com/reve-l/aggridtuto1" target='_blank'>
                          <div className='cardr'>
                            <h6><FontAwesomeIcon icon={faCoffee} className='cardr-font'/>aggridtuto1</h6>
                            <p>Tuto N°1 pour l'utilisation de AG-GRID REACT initialisation - principe - customisation</p>
                            <footer>AG-GRID React js</footer>
                          </div>
                      </a>
                      <a href="https://github.com/reve-l/react-hooks-crud-server-spring" target='_blank'>
                          <div className='cardr'>
                            <h6><FontAwesomeIcon icon={faCoffee} className='cardr-font'/>react-hooks-crud-server-spring</h6>
                            <p>serveur spring du tuto react hooks bezkoder</p>
                            <footer>Spring Boot</footer>
                          </div>
                      </a>
                      <a href="https://github.com/reve-l/react_hooks_crud_axios-client" target='_blank'>
                          <div className='cardr'>
                            <h6><FontAwesomeIcon icon={faCoffee} className='cardr-font'/>react_hooks_crud_axios-client</h6>
                            <p>client react js du tuto react hooks bezkoder</p>
                            <footer><div className='ball'></div>React js</footer>
                          </div>
                      </a>
                      <a href="https://github.com/reve-l/formation1-serie" target='_blank'>
                          <div className='cardr'>
                            <h6><FontAwesomeIcon icon={faCoffee} className='cardr-font'/>TP pratique sur react js</h6>
                            <p>TP sur react js</p>
                            <footer><div className='ball'></div>React js</footer>
                          </div>
                      </a>
                  </div>
                  </section>



              </div>

 <div className='mb-5 mt-5'> </div>

              <footer className="pied mt-5">
              {user?<span className='user-f badge badge-info' data-title='Déconnectez-vous'>REVEL</span>  :""}
                <small>&copy; 2014 - revel - portfolio</small>
              </footer>

    </div>
  );
}

export default Home;
