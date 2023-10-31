import './Missing.css';
import laugh from './assets//images/laugh.png';
import revel from "./assets/images/revel.jpg";
import back from "./assets/images/arrow.png";
import { Link } from 'react-router-dom';




function Missing() {
    return (
        <div className='missing'>
            <img src={revel} className='img-miss' />
            <h1 className='missing-h'>ERREUR DE ROUTE ! CETTE PAGE EST INEXISTANTE</h1>
            <Link to="/"><img src={back} className='img-miss' /> PAGE D'ACCEUIL</Link>
 
        </div>
   );
}

export default Missing;