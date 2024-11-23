// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; //acces to db from the firestore
import { getAuth, GoogleAuthProvider } from "firebase/auth" //we are working google auth provideer so we have impoted this if we need more then need to add more the firebase



// Your web app's Firebase configuration
/* const firebaseConfig = {
  apiKey: "AIzaSyBGbJk17T_hFMKXODLagvyUeiaIHRlKH0M",
  authDomain: "writenode-72926.firebaseapp.com",
  projectId: "writenode-72926",
  storageBucket: "writenode-72926.firebasestorage.app",
  messagingSenderId: "711749042187",
  appId: "1:711749042187:web:302bc2bd98cf03a970070e"
}; */

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: `${process.env.REACT_APP_AUTHDOMAIN}`,
    projectId: `${process.env.REACT_APP_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
    appId: `${process.env.REACT_APP_APP_ID}`
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();