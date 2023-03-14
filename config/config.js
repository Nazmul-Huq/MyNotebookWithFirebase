// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getStorage} from "firebase/storage";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF7DXd7zCVa47qlxKPDSXAxyxElOo2JtE",
  authDomain: "mynotebookwithfirebase.firebaseapp.com",
  projectId: "mynotebookwithfirebase",
  storageBucket: "mynotebookwithfirebase.appspot.com",
  messagingSenderId: "755469120860",
  appId: "1:755469120860:web:97020480ac8119c8693d99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore();
export const storage = getStorage(app);