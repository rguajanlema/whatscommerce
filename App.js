import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import Loading from "./src/Componentes/Loading";
import RutasNoAutenticadas from "./src/Navegacion/RutasNoAutenticadas";
import SwitchNavigator from "./src/Navegacion/SwitchNavigator";
import { validarsesion } from "./src/Utils/Acciones";

LogBox.ignoreAllLogs();

export default function App() {
  const [user, setUser] = useState(false);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    validarsesion(setUser);
    setloading(false);
  }, []);

  if (loading) {
    return <Loading isVisible={loading} text="Cargando.." />;
  }
  return user ? <SwitchNavigator /> : <RutasNoAutenticadas />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
