// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore,doc,setDoc,collection,getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcOmmiLWyWFRiBwN2LJJbFJXygy0RTdG8",
  authDomain: "react-practice-e708f.firebaseapp.com",
  projectId: "react-practice-e708f",
  storageBucket: "react-practice-e708f.appspot.com",
  messagingSenderId: "985685659834",
  appId: "1:985685659834:web:5b8846a0a03feb1fdef283",
  measurementId: "G-5XWKYS7RSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
const db=getFirestore(app)
const storage = getStorage(app);


export{auth,app,db,createUserWithEmailAndPassword,signInWithEmailAndPassword,doc,setDoc,storage,uploadBytes,ref,collection,getDocs}