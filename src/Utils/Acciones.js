import { useEffect, useState } from "react";
import { firebaseApp } from "./Firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth();

export const validarsesion = (setvalidarsesion) => {
  console.log("setvalidarsesion");
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setvalidarsesion(true);
    } else {
      setvalidarsesion(false);
    }
  });
};

export const cerrarsesion = () => {
  signOut(auth);
};

export const validadPhone = (setphoneauth) => {
  onAuthStateChanged(auth, (user) => {
    if (user.phoneNumber) {
      setphoneauth(true);
    }
  });
};
