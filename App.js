import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Loading from "./src/Componentes/Loading";
//import RutasAutenticadas from "./src/Navegacion/RutasAutenticadas";
import RutasNoAutenticadas from "./src/Navegacion/RutasNoAutenticadas";
import SwitchNavigator from "./src/Navegacion/SwitchNavigator";
import { validarsesion } from "./src/Utils/Acciones";

export default function App() {
  const [user, setuser] = useState(false);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    validarsesion(setuser);
    setloading(false);
  }, []);
  if (loading) {
    return <Loading isVisible={loading} text="Cargando.." />;
  }

  return user ?<SwitchNavigator/> : <RutasNoAutenticadas />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
