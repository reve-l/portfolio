
import './assets/connectez.css';

//import * as React from 'react';
import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Radio from '@mui/material/Radio';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validation";
import { useForm } from "react-hook-form";
import { faHandshake,faHandPointRight,faExclamationTriangle, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



import facebook from "./assets/images/facebook.jpg";
import github2 from "./assets/images/github2.png";
import googlee from "./assets/images/google.jpeg";
import yahoo from "./assets/images/yahoo.png";

import revel from "./assets/images/revel.jpg";





//export default function FormDialog() {
export default function Coonectez({open,handleClose,data,onChange,handleFormSubmit,handleFormSubmit2,errorconnect,regist,handleRegister,passforget,handlePAssForget,smspassforget,smshidepassforget,hidepassforget, errors,passshow,HandlePassShow}) {
    //const {id,username,password}=data;
    const {id,email,password,password2,phone,adresse,country,gender}=data;

 
  /*
   const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };*/

 
const google = ()=>{
  window.open("http://localhost:4000/auth/google","_self")
}

useEffect( () => {
  sessionStorage.clear();
},[])




  return (
    <div>
        {/**
         *      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
         */}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {regist?<h6>INSCRIVEZ-VOUS DANS LE SITE<img src={revel} alt="revel" className="img-fluid img-conx"/></h6>:<h6>CHOISISSEZ UNE METHODE DE CONNEXION<img src={revel} alt="revel" className="img-fluid img-conx"/></h6>}
        </DialogTitle>
        <DialogContent>
            <div className='wrapper'>
                       
                {regist?
                     
                     
                     <div className='rigth2'>
                         <form className='mb-5' onSubmit={()=>handleFormSubmit2(data)}>
                             {errorconnect?<span className='errorconect'>PARAMETRES INVALIDES</span>:""}

                             <div>
                             <TextField id="id" value={id} autoComplete='off' onChange={(e)=>onChange(e)} placeholder="" label="Prénom" margin="dense" variant='standard'/>
                             </div>
                             <div>
                             <TextField id="email" value={email} onChange={(e)=>onChange(e)} placeholder="" label="Email" margin="dense" variant='standard'/>
                             </div>
                             <TextField id="password" type={passshow?"text":"password"} value={password} onChange={(e)=>onChange(e)} placeholder="" label="Votre mot de passe" margin="dense" variant='standard'/>
                             <TextField id="password2" type={passshow?"text":"password"} value={password2} onChange={(e)=>onChange(e)} placeholder="" label="Confirmez de ce password" margin="dense" variant='standard'/>
                             <span className='pass-show2' onClick={HandlePassShow}><FontAwesomeIcon icon={faEye}/></span>    
                             
                             <TextField id="phone" value={phone} onChange={(e)=>onChange(e)} placeholder="exple:+237656597015" label="Téléphone" margin="dense" variant='standard'/>
                             <TextField id="adresse" value={adresse} onChange={(e)=>onChange(e)} placeholder="" label="Adresse" margin="dense" variant='standard'/>
                             <TextField id="country" value={country} onChange={(e)=>onChange(e)} placeholder="" label="Pays" margin="dense" variant='standard'/>
                             <TextField id="gender" value={gender} onChange={(e)=>onChange(e)} placeholder="" label="Sexe" margin="dense" variant='standard'/>
                        
                             <div className='genre'>
                             <FormLabel id="demo-radio-buttons-group-label" className='ml-5 pl-5'>  GENRE  </FormLabel>
                             <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                              >
                                <FormControlLabel id="gender" value="female" onChange={(e)=>onChange(e)} control={<Radio />} label="Feminin" variant='standard' />
                                <FormControlLabel id="gender" value="male" onChange={(e)=>onChange(e)} control={<Radio />} label="Masculin" variant='standard'/>
                              </RadioGroup>
                              </div> 
                              <br/>
                              <br/> 

                        <DialogActions>
                          <Button onClick={handleClose} color="secondary" variant="outlined" size="small">Cancel</Button>
                          <Button color="primary" type="submit" variant="contained" autoFocus size="small">
                            {/**onClick={()=>handleFormSubmit2(data)} */}
                            {regist?"S'inscrire":"Connexion"}
                          </Button>                         
                          
                            {(errors.id||errors.email||errors.password||errors.password2||errors.phone||errors.country||errors.gender)
                             && <div className='errs'>
                                            <h6>ATTENTION <FontAwesomeIcon icon={faExclamationTriangle} className=''/></h6>
                                            <span>{errors.id?errors.id:''}</span>
                                            <span>{errors.email?errors.email:''}</span> 
                                            <span>{errors.password?errors.password:''}</span> 
                                            <span>{errors.password2?errors.password2:''}</span> 
                                            <span>{errors.phone?errors.phone:''}</span>
                                            <span>{errors.country?errors.country:''}</span>
                                            <span>{errors.gender?errors.gender:''}</span>    
                                          </div>
                            }
                           

                        </DialogActions>
                        
                        
                        
                        
                        
                        
                        
                        
                        
                         </form>
                     
                



                        
                        <span className='conect-regist' onClick={handleRegister}>
                            {regist?"Se connecter ?":"Pas encore inscrit ? ?"}
                        </span>
                      </div>



                :
                               
                <>

                      <div className='left' disable={true}>
                          <h6 className='connx-s-title'><FontAwesomeIcon icon={faHandPointRight} size="xs" className=''/>Connexion par un réseau social:</h6>
                          <div className='loginButton' >
                          <img src={googlee} alt="revel" className="img-fluid"/>
                          </div>
                          <div className='loginButton'>
                          <img src={facebook} alt="revel" className="img-fluid"/>
                          </div>
                          <div className='loginButton'>
                              <img src={github2} alt="revel" className="img-fluid"/>
                          </div> 
                          <div className='loginButton'>
                              <img src={yahoo} alt="revel" className="img-fluid"/>
                          </div> 
                      </div>

                      <div className='center'>
                          <div className='line'></div>
                          <div className='or'>OR</div>
                      </div>

                      <div className='rigth'>
                      

                              <form className='mb-5'>
                                  {errorconnect?<span className='errorconect'>PARAMETRES INVALIDES</span>:""}
                                  <h6 className='connx-s-title'><FontAwesomeIcon icon={faHandPointRight} size="xs" className=''/>Connexion avec compte:</h6>
                                  {
                                      passforget?
                                        <span className='errorconect2'>{hidepassforget?smshidepassforget:"votre pass a été envoyé à "+`${smspassforget}`} </span>
                                    :
                                    ""
                                    }
                                  <TextField id="id" value={id} onChange={(e)=>onChange(e)} placeholder="" label="Prénom" margin="dense" variant='standard'/>
                                  <br/>
                                  <TextField id="password" type={passshow?"text":"password"} value={password} onChange={(e)=>onChange(e)} placeholder="" label="Mot de passe" margin="dense" variant='standard'/>
                                  <span className='pass-show' onClick={HandlePassShow}>{passshow?"cacher le pass":"voir le pass"}</span>    
                                  <span className='pass-forget' onClick={handlePAssForget}>Mot de passe oublié?</span>
                              </form>

                        
                        

                              <DialogActions>
                                <Button onClick={handleClose} color="secondary" variant="outlined" size="small">Cancel</Button>
                                <Button color="primary" variant="contained" onClick={()=>handleFormSubmit(data)} autoFocus size="small">
                                  {regist?"S'inscrire":"Connexion"}
                                </Button>
                                
                              </DialogActions>
                              <span className='conect-regist' onClick={handleRegister}>
                                  {regist?"Se connecter ? ?":"Pas encore inscrit ? ?"}
                              </span>
                      </div>

                </>

                
                }

            </div>

        </DialogContent>


      </Dialog>
    </div>
  );
}
