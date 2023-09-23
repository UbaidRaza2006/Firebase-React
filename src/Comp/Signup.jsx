import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import { app, auth, db,createUserWithEmailAndPassword ,doc,setDoc,uploadBytes,ref,storage} from '../Firebase/Config'
import { Firestore } from 'firebase/firestore';

function Signup() {
  const navigate = useNavigate();


  const [email, setEmail] = useState('')
  // const [file,setFile] =useState('')
  const [password, setPassword] = useState('')
  const [name,setName]= useState('')
  const [file,setFile]= useState('')


  // const handleFileChange = (event) => {
  //   const selectedFile = event.target.files[0];
  //   setFile(selectedFile);
  // };
  // console.log('Chal rahaa he');

  function submit() {
    // console.log(email);
    // console.log(password);
    // console.log(password);


    createUserWithEmailAndPassword(auth, email, password)
      .then(async(userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert('User Created')
        console.log('User',user);
        navigate("/signin");

// Firestore

        try {
          const docRef = await setDoc(doc(db, "users",user.uid), {
            userEmail: email,
            userPassword: password,
            userName:name,
            userFile:file
            
          });
          console.log("Document written with ID: ", docRef.id);
          // console.log(docref.userFile);
        } catch (e) {
          console.error("Error adding document: ", e);
        }

        // Storage
        
// const storageRef = ref(storage, 'some-child');


//         uploadBytes(storageRef, file).then((snapshot) => {
//           console.log('Uploaded a blob or file!');
//         });
//         // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Error',errorMessage)
        console.log('Error',errorMessage)
        // ..
      });
      setEmail('')
      setPassword('')
      setName('')
      setFile('')


  }



  return (
    <>
      <div className="join flex flex-col w-[20em] mt-4 flex items-center">
      <input className="input input-bordered join-item w-[20em] mt-4" placeholder="Name" value={name} onChange={(e) => {setName(e.target.value) }} />
        <input className="input input-bordered join-item w-[20em] mt-4" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value) }} />
        <input type='password' className="input input-bordered join-item w-[20em] mt-4" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value) }} />
        <div className="form-control w-full max-w-xs">

          <input type="text" value={file} onChange={(e)=>{setFile(e.target.value)}} placeholder='Provide Src of Image' className="file-input file-input-bordered w-full max-w-xs mt-4" />

        </div>
        <button className="btn join-item rounded-full w-[10em] justify-center mt-4" onClick={submit}>Submit</button>
      </div>
    </>
  )
}

export default Signup