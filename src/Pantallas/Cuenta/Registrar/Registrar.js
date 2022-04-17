import React, { useRef } from "react";
import { View, Text, StatusBar, Image } from "react-native";
import Toast from "react-native-easy-toast";

import { RegisterForm } from "../../../Componentes/RegisterForm";
import { styles } from "./Registrar.styles";

export function Registrar() {
  const toastRef = useRef();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#128C73" />
      <Image
        source={require("../../../../assets/logo.png")}
        style={styles.imglogo}
      />
      <Text style={styles.textobaner}>CREAR CUENTA</Text>
      <RegisterForm toastRef={toastRef} />
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </View>
  );
}
