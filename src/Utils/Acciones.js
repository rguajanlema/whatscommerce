import { useEffect, useState } from "react";
import { firebaseapp } from "./Firebase";
//import * as firebase from "firebase";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";

const auth =getAuth();

export function validarsesion() {

    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            if(user){
                alert("usuario logueado");
            }else{
                alert("no ha iniciado sesion");
            }
        });
        return unsub;
    },[])

    return currentUser;
};

export const cerrarsesion = () => {
    signOut(auth);
}
