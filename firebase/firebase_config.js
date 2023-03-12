import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import {getStorage} from "firebase/storage";


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAF7DXd7zCVa47qlxKPDSXAxyxElOo2JtE",

    authDomain: "mynotebookwithfirebase.firebaseapp.com",
  
    projectId: "mynotebookwithfirebase",
  
    storageBucket: "mynotebookwithfirebase.appspot.com",
  
    messagingSenderId: "755469120860",
  
    appId: "1:755469120860:web:97020480ac8119c8693d99",
    
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const storage = getStorage(app);
export {app, db, getFirestore, collection, addDoc, getDocs}
