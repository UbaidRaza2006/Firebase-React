import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import { app, auth, db,createUserWithEmailAndPassword,signInWithEmailAndPassword } from '../Firebase/Config'


function Signin() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    // // const [file,setFile] =useState('')
    const [password, setPassword] = useState('')

    function login(){

        
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert('User Signed In')
            console.log('User',user);
            navigate('/admin')
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Error')
            console.log('Error',errorMessage)
          });

setEmail('')
setPassword('')

    }

  return (
   <>
   
   <div className="join flex flex-col w-[20em] mt-4 flex items-center">
        <input className="input input-bordered join-item w-[20em] mt-4" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value) }} />
        <input type='password' className="input input-bordered join-item w-[20em] mt-4" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value) }} />
       
        <button className="btn join-item rounded-full w-[10em] justify-center mt-4" onClick={login}>Submit</button>
      </div>

   </>
  )
}

export default Signin