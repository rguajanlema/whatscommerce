import { useEffect, useState } from "react";
import { firebaseApp } from "./Firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  reauthenticateWithPhoneNumber,
  PhoneAuthProvider,
  linkWithCredential,
} from "firebase/auth";

const auth = getAuth();

export const validarsesion = (setvalidarsesion) => {
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

export const enviarconfirmacion = async (numero, recapcha) => {
  let verificationid = "";

  await reauthenticateWithPhoneNumber(auth.currentUser, recapcha.current)
    .then((response) => {
      verificationid = response.verificationId;
    })
    .catch((err) => console.log(err));

  return verificationid;
};

export const confirmarcodigo = async (verificationId, codigo) => {
  let resultado = false;
  const credenciales = PhoneAuthProvider.credential(verificationId, codigo);

  await linkWithCredential(auth.currentUser, credenciales)
    .then((response) => (resultado = true))
    .catch((err) => {
      console.log(err);
    });

  return resultado;
};
