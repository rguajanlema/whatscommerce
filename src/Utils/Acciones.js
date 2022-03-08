import { useEffect, useState } from "react";
import { firebaseapp } from "./Firebase";
//import * as firebase from "firebase";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";

const auth =getAuth();

export const validarsesion =(setvalidarseseion)=>{
    onAuthStateChanged(auth,(user)=>{
        if(user){
            setvalidarseseion(true);
        }else{
            setvalidarseseion(false);
        }
    });
};

export const cerrarsesion = () => {
    signOut(auth);
}

export const validadPhone = (setphoneauth) => {
    onAuthStateChanged(auth, (user)=>{
        if(user.phoneNumber){
            setphoneauth(true);
        }
    });
};
