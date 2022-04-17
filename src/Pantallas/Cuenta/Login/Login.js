import React, { useRef } from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { LoginForm } from "../../../Componentes/LoginForm";
import Toast from "react-native-easy-toast";

import { styles } from "./Login.styles";

export function Login() {
  const toastRef = useRef();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#128C73" />
      <Image
        source={require("../../../../assets/logo.png")}
        style={styles.imglogo}
      />
      <Text style={styles.textobaner}>!Bienvenido!</Text>
      <LoginForm toastRef={toastRef} />
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </View>
  );
}
