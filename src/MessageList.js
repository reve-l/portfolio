//import './MessageList.css';
import laugh from './assets//images/laugh.png';
import revel from "./assets/images/revel.jpg";
import back from "./assets/images/arrow.png";
import { Link } from 'react-router-dom';

import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';



function MessageList() {

    const [smsList, setSmsList] = useState("");

    const url3="http://localhost:4000/messages/";



    const handleMessageList = () =>{
        fetch(url3, {method:"GET",headers:{'content-type':"application/json"}} )
        .then(response => {return response.json()})
        .then(response => {
            console.log(response.data);
            setSmsList(response.data);
        })
        
      }




    // Example load data from server
    useEffect(() => {
        handleMessageList ()
        }, []);
  
    return (
        <div className=''>
            <img src={revel} className='img-miss' />
            <h1 className=''>LISTE DES MESSAGES REçUs</h1>
            <Link to="/"><img src={back} className='img-miss' /> PAGE D'ACCEUIL</Link>

            {
                smsList && setSmsList.map((message,index)=>(
                    <li>
                        {/*mess*/}
                    </li>
                ))
            }
 
        </div>
   );
}

export default MessageList;