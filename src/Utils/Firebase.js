// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCqx-HHf7_Hq_ldsq7YMAaxRv1WSLM_Sow",
  authDomain: "whatscommerce-89875.firebaseapp.com",
  databaseURL: "https://whatscommerce-89875-default-rtdb.firebaseio.com",
  projectId: "whatscommerce-89875",
  storageBucket: "whatscommerce-89875.appspot.com",
  messagingSenderId: "540783072233",
  appId: "1:540783072233:web:5d9b3d0c55ba63e98cb178",
  measurementId: "G-NM8PS7B85V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;