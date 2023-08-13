//import logo from './logo.svg';
//import './App.css';

import './assets/css/style.css';

//import { fab } from '@fortawesome/free-brands-svg-icons' 

// import your icons
import { faCoffee,faQuoteLeft,faQuoteRight, } from '@fortawesome/free-solid-svg-icons'
import { faWhatsappSquare,faSkype,faFacebookMessenger,faGoogle } from '@fortawesome/free-brands-svg-icons'

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

function App() {
  return (
    <div className="App">
              <header class="container head h-100">
                <div class="row head-1">
                  <div class="col-6">
                    <div class="head-1-g pt-3" id="head-g">
                      <img src={revel} alt="revel" class="img-fluid"/>
                 
                    </div>
                  </div>
                  <div class="col-6  d-flex flex-column justify-content-center">
                    <div class="port">
                      <span class="head-1-d-t">portfolio</span>
                      <div class="head-1-d">
                        <h1>REVEL</h1>
                        <h6><span> Web Developper</span></h6>
                      </div>
                    </div>
                  
                    <div class="head-1-d-p">
                      <p>Html5|Css3|Bootstrap5|Material UI|Materialize css|React js|React  Native|Node JS|Jquery|Vs Code|Wordpress|Github|Mysql|Sql yog|Sql Server|Management Studio|Mongo DB|Golang|Spring boot|Jaspert|Spring Boot|Java</p>
                    </div>
                  </div>
                </div>
                <div class="row head-2">
                  <div class="l-menu">
                    <div class="l-menu-h"><img src={srvices} alt="services"/></div>
                    <h6 class="l-menu-t"><a href="">Services</a></h6>
                  </div>
                  <div class="l-menu">
                    <div class="l-menu-h"><div><img src={realisations} alt="realisations"/></div></div>
                    <h6 class="l-menu-t"><a href="">Réalisations</a></h6>
                  </div>
                  <div class="l-menu">
                    <div class="l-menu-h"><div><img src={contact} alt="contact"/></div></div>
                    <h6 class="l-menu-t"><a href="">Contactez moi</a></h6>
                  </div>
                  <div class="l-menu">
                    <div class="l-menu-h"><div><img src={technologies} alt="technologies"/></div></div>
                    <h6 class="l-menu-t"><a href="">Mes Technos</a></h6>
                  </div>
                  <div class="l-menu">
                    <div class="l-menu-h"><div><img src={aboutrevel} alt="About revel"/></div></div>
                    <h6 class="l-menu-t"><a href="">About me</a></h6>
                  </div>
                </div>
              </header>

              <div class="container">

                  <section class="row myservices">

                        <div class="row mb-5 r-title">
                          <div class="col-12 text-center">
                            <div class="myservices-t">
                              <h1>Mes <span>services</span> </h1>
                            </div>
                          </div>
                        </div>

                        <div class="row mb-1">
                          <article class="col-6">
                            <div class="s-item s-item-1"><p>Développement d'application FullStack avec React JS et Mongo DB</p><img src={hominterfac} alt=""/></div>
                          </article>
                          <article class="col-6">
                            <div class="s-item s-item-2"><p>Développement d'application mobile avec React Native</p><img src={hominterfac} alt=""/></div>
                          </article>
                          <article class="col-6">
                            <div class="s-item s-item-3"><p>Développement d'application web avec Java Spring Boot</p><img src={hominterfac} alt=""/></div>
                          </article>
                          <article class="col-6 mb-1">
                            <div class="s-item s-item-4"><p>Développement de sites web et thèmes Wordpress</p><img src={hominterfac} alt=""/></div>
                          </article>
                        </div>

                        <div class="row mb-1">
                          <article class="col-6">
                            <div class="b-item s-item-5"><p>Administration des BD Mysql et SQL Server 2012 </p><img src={interfacehome1} alt=""/></div>
                          </article>
                          <article class="col-6">
                            <div class="b-item s-item-6"><p>Conception de système Business Intelligence avec Sql Server 2012</p> <img src={interfacehome1} alt=""/></div>
                          </article>
                          <article class="col-6">
                            <div class="b-item s-item-7"><p>Conception des états avec Jaspertsoft Ireport Designer 5.x</p> <img src={interfacehome1} alt=""/></div>
                          </article>
                          <article class="col-6">
                            <div class="b-item s-item-8"><p>Développement d'application avec Node JS | Spring Boot | Golang  comme backend</p> <img src={interfacehome1} alt=""/></div>
                          </article>
                        </div>

                        <div class="row">
                          <article class="col-6">
                            <div class="b-item s-item-9"><p>HETICHAL HACKING</p> <img src={interfacehome3} alt=""/></div>
                          </article>
                          <article class="col-6">
                            <div class="b-item s-item-10"><p></p>Analyse et Conception UML | MERISE <img src={interfacehome3} alt=""/></div>
                          </article>
                          <article class="col-6">
                            <div class="b-item s-item-11"><p></p>Gestion de projet Informatique avec SCRUM - Méthodes Argiles <img src={interfacehome3} alt=""/></div>
                          </article>
                          <article class="col-6">
                            <div class="b-item s-item-12"><p></p>Redaction cahier de charges sites et applications web <img src={interfacehome3} alt=""/></div>
                          </article>
                        </div>
                  </section>

                  <FontAwesomeIcon icon="fa-brands fa-whatsapp-square" />
                  <FontAwesomeIcon icon={faCoffee} />
                  
                  <section class="row ctact-me pt-5">
                    <article class="col ctact-me-g">

                      <h1>Contactez moi <span>directement...</span></h1> 
                      <p>Vous pouvez m'écrire directement à l'aide du formulaire ci-dessous et je recevrai directement une notification dans mon téléphone, ou alors à partir des liens sociaux à votre droite. Pour m'écrire il faut se connecter, pour se connecter il faut s'abonner pour la première connexion</p>
                      <span class="abon">s'abonner</span> <em> pour m'écrire directement...</em>   
                      <p class="btn btn-info">ou bien <a class="conn"><span class="badge badge-light">se connecter</span></a></p>         
                      <form action="" class="ctact-me-form">

                        <div class="_input1">
                          <input type="text" placeholder="" id="téléphone" />
                          <label for="téléphone" class="_label">Téléphone</label>
                        </div>

                        <div class="_input2">
                          <input type="email" name="" id="" placeholder="" class="" />
                          <label for="email" class="_label">Email</label>
                        </div>

                        <div>
                          <label for="text" class="_label">Objet</label>
                          <textarea name="" id="" cols="30" rows="10"></textarea>
                          <div>
                            <button class="send-ctact-btn">Envoyer</button>
                          </div>
                        </div>           
                      </form>

                    </article>
                    <div class="col ctact-me-c"><p><FontAwesomeIcon icon={faQuoteLeft} /> &nbsp; J'attend... &nbsp; <FontAwesomeIcon icon={faQuoteRight} /></p></div>
                    <article class="col ctact-me-d f-social-ctact">
                          <h6 class="social-ctact-t">join me with social media</h6>
                          <a href="" class="w"><FontAwesomeIcon icon={faWhatsappSquare} /></a>
                          <a href="" class="m"><FontAwesomeIcon icon={faFacebookMessenger} /></a>
                          <a href="" class="s"><FontAwesomeIcon icon={faSkype} /></a>
                          <a href="" class="g"><FontAwesomeIcon icon={faGoogle} /></a>               
                    </article>
                  </section>




              </div>


              <footer class="pied mt-5">
                <small>&copy; 2014 - revel - portfolio</small>
              </footer>

    </div>
  );
}

export default App;
