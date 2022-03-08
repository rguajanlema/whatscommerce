import React, { useState, useEffect } from "react";
import Loading from "../Componentes/Loading";
import RutasAutenticadas from "./RutasAutenticadas";
import CuentaStack from "./CuentaStack";
import { validadPhone } from "../Utils/Acciones";

export default function SwitchNavigator() {
  const [phoneauth, setphoneauth] = useState(false);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    validadPhone(setphoneauth);
    setTimeout(() => {
      setloading(false);
    }, 5000);
  },[]);

  if (loading) {
    return <Loading isVisible={loading} text="Cargar configuracion" />;
  } else {
    return phoneauth ? <RutasAutenticadas /> : <CuentaStack />;
  }
}
