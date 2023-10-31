
import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';

import TextField from '@mui/material/TextField';
import { Link,useParams } from 'react-router-dom';
import Swal from 'sweetalert2';


import Button from '@mui/material/Button';


import back from "./assets/images/arrow.png";





function User(){







    const initialValue = {id:"",email:"",password:"",phone:"",adresse:"",country:"",gender:""};
    const [formData, setFormData] = useState(initialValue);
    const [errorconnect,setErrorConnect]=useState(false);


    const [modif, setModif] = useState(false);


    const url="http://localhost:4000/users/";
    const url2="http://localhost:4000/user/";
    
    const {id}=useParams();
    

    
    
    const onChange=(e)=>{
        const {value,id}=e.target;
        setFormData({...formData,[id]:value});
        //console.log(value,id); 
      };
    
    
      const getUser = id => {
        fetch(url+`${id}`
        //,
        //{method:"GET",headers:{'content-type':"application/json"}}
        )
        .then(response => response.json())
        .then(response => {
            setFormData(response);
            //console.log('IDIDI',response.data.dateEdit);
            //console.log("id",id);
 
            //console.log("USER",response);
          })
          .catch(err => {
            console.log(err);
          });
      };
    


      const handleFormSubmit = (e) => {
        e.preventDefault();
        //const data={{formData.id},formData.email,formData.password,formData.phone,formData.adresse:"",country:"",gender}
        fetch(url+id,{
            method:'PUT',
            body:JSON.stringify(formData),
            headers:{"content-type":"application/json"},
          
          }
        )
        .then(response =>{
            console.log(response);

            console.log(url+id);
            console.log(JSON.stringify(formData));
            //console.log(response);

            Swal.fire({
              title: 'Success!',
              text: 'Enregistré',
              icon: 'success',
              confirmButtonText: 'OK'
            })
       
        }
  
          
        ) 
  
  
  
  
  }//--FIN handleSubit2
  




      useEffect(() => {
        if (id)
          getUser(id);
      }, [id]);
    
    



















    //let { id } = useParams();

    return (
        <div className='mt-5 pb-5'>
            <h1 className='text-center mb-5'>DETAILS USER</h1>
            <div className=''>
                <form className='mb-5 user-form' onSubmit={handleFormSubmit}>
                    {errorconnect?<span className='errorconect'>PARAMETRES INVALIDES</span>:""}
                    <TextField id="id" value={formData.id} onChange={(e)=>onChange(e)} placeholder="" label="Prénom" margin="dense" variant='standard' className='disabld' disabled="disabled"/>
                    <TextField id="email"  value={formData.email} onChange={(e)=>onChange(e)} placeholder="" label="Email" margin="dense" variant='standard' />
                    <TextField id="password" type={"password"} value={formData.password} onChange={(e)=>onChange(e)} placeholder="" label="Votre mot de passe" margin="dense" variant='standard'/>
                    <TextField id="password2" type={"password"} onChange={(e)=>onChange(e)} placeholder="" label="Confirmez ce password" margin="dense" variant='standard'/>
                    <TextField id="phone" value={formData.phone} onChange={(e)=>onChange(e)} placeholder="" label="Téléphone" margin="dense" variant='standard'/>
                    <TextField id="adresse" value={formData.adresse} onChange={(e)=>onChange(e)} placeholder="" label="Adresse" margin="dense" variant='standard'/>
                    <TextField id="country" value={formData.country} onChange={(e)=>onChange(e)} placeholder="" label="Pays" margin="dense" variant='standard'/>
                    <TextField id="gender" value={formData.gender} onChange={(e)=>onChange(e)} placeholder="" label="Sexe" margin="dense" variant='standard'/>
                
                    <Button color="primary" type="submit" variant="contained" size="small" className='mt-5'>
                                  MODIFIER
                    </Button>

                </form>
            </div>
            <Link to="/"><img src={back} className='img-miss' /> PAGE D'ACCEUIL</Link>

        </div>
    )
}

export default User;