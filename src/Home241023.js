//import logo from './logo.svg';
//import './App.css';

import './assets/css/style.css';
//import 'animate.css';

//import { fab } from '@fortawesome/free-brands-svg-icons' 

import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';

import {BrowserRouter,Routes,Route, Navigate, Link} from 'react-router-dom';




// import your icons
import { faCoffee,faQuoteLeft,faQuoteRight,faHandshake,faUsers,faCog } from '@fortawesome/free-solid-svg-icons'
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

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import { EmojiEmotions } from '@mui/icons-material';


function Home() {

  //const url="http://localhost:4000/posts";
  const url2="http://localhost:4000/users/";

  const [open, setOpen] = React.useState(false);

  //const initialValue = {id:"", password:""};
  const initialValue = {id:"",email:"",password:"",password2:"",phone:"",adresse:"",country:"",gender:""};
  const initialValuesms = {id:"",objet:"",sms:"",idUser:"",date:""}//,localisation:"",ip:""};

  const [tableData,setTableData]=useState(null);
  const [currentUser,setCurrentUser]=useState("");
  const [user,setUser]=useState(false);
  const [errorconnect,setErrorConnect]=useState(false);
  const [passforget,setPassForget]=useState(false);
  const [smspassforget,setSmsPassForget]=useState("");
  const [smshidepassforget,setSmsHidePassForget]=useState("");
  const [hidepassforget,setHidePassForget]=useState(false);
  const [errors,setErrors]=useState("");

  const [passshow,setPassShow]=useState(false);
 const [gender, setGender] = useState('');
 const [phonenumber, setPhoneNumber] = useState('');

 const [isPickerVisible, setIsPickerVisible] = useState(false);
 const [currentEmoji,setCurrentEmoji]=useState(null);


  const [formData, setFormData] = useState(initialValue);
  const [formDatasms, setFormDatasms] = useState(initialValuesms);

  //const [formData2, setFormData2] = useState(initialValue2);


  const [regist, setRegist] = useState(false);


const HandlePassShow = () =>{
  setPassShow(passshow ? false: true);
}


const handlePAssForget = () =>{
  //console.log(formData.id);
  //console.log(passforget);
  setPassForget(true);
  if(formData.id==""){
    //console.log("ou est le prénom?");
    //console.log("passforget",passforget);
    setHidePassForget(true);
    setSmsHidePassForget("renseignez d'abord le prénom et cliquez à nouveau sur pass oublié");

  }
  else{
    setHidePassForget(false);
    setSmsHidePassForget("");


    fetch("http://localhost:4000/users/"+`${formData.id}`
    )
    .then(response => response.json())
    .then(response => {
        //setFormData(response);
        setSmsPassForget(response.email)
        console.log(smspassforget);

        //console.log("USER",response);
      })
      .catch(err => {
        console.log(err);
      });
  }
}


  const handleClickOpen = () => {
    setOpen(true);
  };

  const logOut = () => {
    //const confirm=window.confirm("VOULEZ-VOUS VRAIMENT DECONNECTER ?");
    //confirm && 
    
    Swal.fire({
      title: 'Attention souhaitez-vous vous déconnecter',
      icon:'question',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Se déconnecter',
      denyButtonText: `Annuler`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        
        //setUser(false);
        sessionStorage.clear();
        setUser(false);
        setErrorConnect(false);

        //window.localStorage.removeItem("username");
        //window.localStorage.removeItem("isLoggedIn");

        //setUser(Window.sessionStorage.getItem("isLoggedIn"));
        //setCurrentUser(window.sessionStorage.getItem("username"));

        /*
        .then(response => {
          //console.log(response.data);
          Swal.fire('Tous ont été supprimés!', '', 'success')
          //refreshList();
        })
        .catch(e => {
          console.log(e);
        }
        );*/

      } else if (result.isDenied) {
        //navigate("/tutorialslist");
        //Swal.fire('Changes are not saved', '', 'info')
      }
    })
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChangesms=(e)=>{
    const {value,id}=e.target;
   //console.log(e.target.value);
   // console.log(value,id);
    //setPhoneNumber(value);
    //setFormDatasms({...formData,"idUser":currentUser});
    
    setFormDatasms({...formDatasms,[id]:value});
    console.log(formDatasms);
  };

  const onChange=(e)=>{
    //console.log(e);
    const {value,id}=e.target;
    setFormData({...formData,[id]:value});
    //console.log(value,id); 
  };

  const onChangelist=(e)=>{
    //console.log(e.target);
    
    //const {value,id}=e.target;
    setFormData({...formData,"gender":e.target.value});
    //console.log("formdata"); 
    //console.log(formData); 

  };

  const onChangephone=(value)=>{
    //console.log(e.target);
    setPhoneNumber(value);
    setFormData({...formData,"phone":value});
    //console.log(phonenumber);
  };


  /*
 const HandleGender=(e)=>{
  const {value,id}=e.target;

  setGender()
  console.log("GENRE")
  console.log(e);
  console.log(value,id); 
 }
*/



  //const handleFormSubmit = async() => {
    const handleFormSubmit = () => {  
      //console.log("FORM DATA ID",formData.id)    
      //fetch(url2+formData.username)
      fetch(url2+`/${formData.id}`,
        {method:"GET",headers:{'content-type':"application/json"}}

        )

      .then(response => response.json())
      .then(response =>{
        //console.log("REPONSE",response);
        if(Object.keys(response).length===0){
          //console.log("USER INCORRECT")
          setErrorConnect(true);
        }
        else{
          if(response.password===formData.password){
            //console.log("PASSWORD OKAY");
            //console.log("RESPONSE PASSWRD DATA ID",formData.id)
            window.sessionStorage.setItem("id", formData.id);
            setUser(true);
            setCurrentUser(sessionStorage.getItem("id"));
            handleClose();
            //console.log("id", formData.id);
          }else setErrorConnect(true)//console.log("PASSWORD INCORRECT")
        }
      })
      .catch((err)=>{
        console.log(err.message)
      })
  };
//--FIN handleSubit



const handleFormSubmit2 = (e) => {
      console.log(formData);



      const  validationErrors = {};
      if(!formData.id.trim()){
        validationErrors.id="le prénom est obligatoire"
      }else if(!/[a-zA-Z]+[a-zA-Z]+$/.test(formData.id)){
        validationErrors.id="le prénom est incorrecte !"

      }

      if(!formData.email.trim()){
        validationErrors.email="email obligatoire"
      }else if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(formData.email)){
        validationErrors.email="email incorrecte !"
      }

      if(!formData.password.trim()){
        validationErrors.password="le mot de passe est obligatoire"
      }/*else if(/^.{5,7}$/.test(formData.password)){
        validationErrors.password="minimum cinq caractères et maximum sept"
      }*/else if(formData.password.length<5){
        validationErrors.password="le password c'est minimum 5 caractères"
      }else if(formData.password.length>7){
        validationErrors.password="le password c'est miximum 7 caractères"
      }
      else if(!/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/.test(formData.password)){
        validationErrors.password="le password doit contenir une majuscule, un chiffre, un caractère spécial"
      }

      /*if(!formData.password2.trim()){
        validationErrors.password2="la confirmation est obligatoire"
      }else*/ if(formData.password2!==formData.password){
        validationErrors.password2="les mots de passe ne correspondent pas !"
      }

      if(!formData.phone.trim()){
        validationErrors.phone="le téléphone est obligatoire"
      }else if(!/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(formData.phone)){
        validationErrors.phone="le numéro de téléphone est invalide exple: +237656597015"
      }
/*
      if(!formData.adresse.trim()){
        validationErrors.adresse="le prénom est obligatoire"
      }
*/
      if(!formData.country.trim()){
        validationErrors.country="le pays est obligatoire"
      }

      if(!formData.gender.trim()){
        validationErrors.gender="le genre est obligatoire"
      }

      setErrors(validationErrors);

      if(Object.keys(validationErrors).length===0){
                          
              fetch(url2,
                {method:"POST", body:JSON.stringify(formData), headers:{'content-type':"application/json"}}
              )
              .then(response => response.json())
              .then(response =>{
            
                window.sessionStorage.setItem("id", formData.id);
                setCurrentUser(sessionStorage.getItem("id"));
                
              // console.log("formdata",formData.id);
              // console.log("currentuser",currentUser);
                
                setUser(true);
                setFormData(initialValue)
                handleClose();
                setRegist(false);

                /*
                console.log(formData);
                console.log(user);
                console.log(initialValue);
              */

                
              }

                
              ) 
      }else {
        setOpen(true);
      }





}//--FIN handleSubit2












const handleRegister= () => {
  setRegist(!regist)
}



  const handleDelete = (id) => {
    const confirm=window.confirm("SUPPRIMER????",id)
    if(confirm){
        fetch(url2+`/${id}`,
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
     /*
      if(user){
        sessionStorage.setItem("id", formData.id);
        setCurrentUser(sessionStorage.getItem("id"));
        //console.log("currentuser useeefect",currentUser)
      }
*/


      getUsers();
      //fetch('http://localhost:4000/posts')
      //.then(result => result.json())
      //.then(response => response.json())
      //.then(data=>{
        //  gridOptions.api.setRowData(data);
      //})
      //.then(rowData => setRowData(rowData))
    //}, [currentUser]);
      }, []);



    const getUsers=()=>{
      fetch(url2)
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
 
                      <p className="btn btn-info usercon">
                        <img src={usericonperso} alt="users" className="img-fluid"/>

                      {user?<span className='user-f-c' data-title="Déconnectez-vous" onClick={logOut}>{currentUser}</span>  : <a className="conn"><span className="badge badge-light seconnect" onClick={handleClickOpen}>se connecter</span></a>
}                     {user?<Link to={"user/"+`${formData.id}`}><span className='config-connect' data-title="modifier votre user"><FontAwesomeIcon icon={faCog} /></span></Link>:''}
                        
                        <Connectez open={open} handleClose={handleClose} data={formData} onChange={onChange} onChangelist={onChangelist} onChangephone={onChangephone} handleFormSubmit={handleFormSubmit} handleFormSubmit2={handleFormSubmit2} errorconnect={errorconnect} regist={regist} handleRegister={handleRegister} passforget={passforget} handlePAssForget={handlePAssForget} smspassforget={smspassforget} smshidepassforget={smshidepassforget} hidepassforget={hidepassforget} errors={errors} passshow={passshow} HandlePassShow={HandlePassShow} phonenumber={phonenumber}/>

                        </p>         
                      <form action="" className="ctact-me-form">


                        <div className="_input2 text-center">
                          <input type="text" name="" id="objet" placeholder="" className="" value={formDatasms.objet} onChange={(e)=>onChangesms(e)}/>
                          <label for="emai" className="_label">Objet</label>
                        </div>

                        <div className='text-center'>
                          <label for="text" className="_label text-center">Message</label>
                          
                          <textarea name="sms" id="sms" cols="30" rows="10" value={formDatasms.sms} onChange={(e)=>onChangesms(e)} />
                          
                          <h3>{currentEmoji||'select'}</h3>
                         
                          <button onClick={() =>setIsPickerVisible(!isPickerVisible)}>hihihi</button>
 
                              <div className={isPickerVisible?'d-block':'d-none'}>
                                  <Picker 
                                    data={data}
                                    previewPosition="none"
                                    onEmojiSelect={(e) =>{
                                        setCurrentEmoji(e.native);
                                        setIsPickerVisible(!isPickerVisible);
                                    }}
                                  />
                              </div>
                          <div>
                            <button className={user?"send-ctact-btn":"not-send-ctact-btn"} data-title={user?"Envoyer message":"Connectez-vous d'abord"} disabled={user?false:true}>Envoyer</button>
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
              {user?<span className='user-f badge badge-info' data-title='Déconnectez-vous' onClick={logOut}>{currentUser}</span>  :""}
                <small>&copy; 2014 - revel - portfolio</small>
              </footer>

    </div>
  );
}

export default Home;
