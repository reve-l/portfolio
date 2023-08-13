import logo from './logo.svg';
import './App.css';
import './assets/css/style.css';

import revel from "./assets/images/revel.jpg";
import srvices from "./assets/images/srvices.png";

import realisations from "./assets/images/realisations.png";
import contact from "./assets/images/contact.png";
import technologies from "./assets/images/technologies.png";
import aboutrevel from "./assets/images/aboutrevel.png"

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




              <footer class="pied mt-5">
                <small>&copy; 2014 - revel - portfolio</small>
              </footer>

      </div>
  );
}

export default App;
