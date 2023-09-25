// import { doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { app, auth, db,createUserWithEmailAndPassword,signInWithEmailAndPassword,collection,getDocs } from '../Firebase/Config'

// function Admin (){
  

//   const [showData,setShowData]=useState([])

//   useEffect(()=>{


//   async function fetch() {
  
    
//     const querySnapshot = await getDocs(collection(db, "users"));
//     const userDataArray =[]
//     querySnapshot.forEach((doc) => {
//       // doc.data() is never undefined for query doc snapshots
//       userDataArray.push({id:doc.id,...doc.data()});
//       // console.log(doc.id, " => ", doc.data());
//       // console.log(userDataArray);
//       setShowData(userDataArray);
//     });
//     console.log(showData);
      
//     }
//       fetch()
//   }, [])
  


  

//     return (
//       <>
//       {showData.map((elem)=>{
//       <div className="hero w-[40em] h-[10em]  bg-base-200 mt-4">
//       <div className="hero-content flex-col ml-[-30em] lg:flex-row">
//         <img src={elem.userFile} className="max-w-sm rounded-lg shadow-2xl w-[8em] " />
//         <div className='ml-[20em] mt-[-8em]'>
//           <h1 className="text-2xl font-bold">{elem.userName}</h1>
//           <p className="py-6">{elem.userEmail}</p>
//         </div>
//       </div>
//     </div>
    
//   })}
//       </>
//       )


 
// }

// export default Admin



// import React, { useEffect, useState } from 'react';
// import { collection, getDocs } from '../Firebase/Config';

function Admin() {
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const userDataArray = [];
      querySnapshot.forEach((doc) => {
        userDataArray.push({ id: doc.id, ...doc.data() });
      });
      setShowData(userDataArray);
      console.log(userDataArray);
    }

    fetchData();
  }, []);

  

  return (
    <>
      {showData.map((elem) => {
        console.log('elem->' ,elem)
        return(
        <div key={elem.id} className="hero w-[40em] h-[10em] bg-base-200 mt-5">
          <div className="flex">
            <img style={{height :130 , width : 130}} src={elem.userFile} className="max-w-sm rounded-lg shadow-2xl ml-[-4em]" alt="User Avatar" />
            <div className="ml-[10em] mt-[-5.5em]">
              <h1 className="text-2xl font-bold mt-[4em]">{elem.userName}</h1>
              <p className="py-6">{elem.userEmail}</p>
            </div>

          </div>
        </div>)
      })}

      {/* <img src="C:\Users\Personal\Desktop\ubaid raza\other work\React Practice\starting-firebase\public\logo512.png" alt="" /> */}
    </>
  );
}

export default Admin;