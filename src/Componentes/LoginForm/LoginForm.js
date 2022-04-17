import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View, TouchableOpacity } from "react-native";
import { Icon, Input, Button, Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { validaremail } from "../../Utils/Utils";
import { isEmpty } from "lodash";
import { validarsesion } from "../../Utils/Acciones";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { styles } from "./LoginForm.styles";

const auth = getAuth();
const Stack = createStackNavigator();

export function LoginForm(props) {
  const { toastRef } = props;
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [show, setshow] = useState(true);
  const [loading, setloading] = useState(false);

  const navigation = useNavigation();

  //validarsesion();

  const iniciarsesion = () => {
    if (isEmpty(email) || isEmpty(password)) {
      toastRef.current.show("Debe ingresar los valores de email o password");
    } else if (!validaremail(email)) {
      toastRef.current.show("Ingrese un correo valido");
    } else {
      setloading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setloading(false);
          toastRef.current.show("Ha iniciado sesion exitosamente");
          console.log(auth.currentUser);
        })
        .catch((err) => {
          setloading(false);
          toastRef.current.show("Ha ocurrido un error al iniciar sesion");
        });
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          borderBottomColor: "#25D366",
          borderBottomWidth: 2,
          width: 100,
        }}
      />
      <Input
        placeholder="Correo"
        containerStyle={styles.input}
        rightIcon={{
          type: "material-community",
          name: "at",
          color: "#128c7e",
        }}
        leftIcon={{
          type: "material-community",
          name: "account-circle-outline",
          color: "#128c7e",
        }}
        onChangeText={(text) => {
          setemail(text);
        }}
        value={email}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        leftIcon={{
          type: "material-community",
          name: "security",
          color: "#128c7e",
        }}
        rightIcon={{
          type: "material-community",
          name: show ? "eye-outline" : "eye-off-outline",
          color: "#128c7e",
          onPress: () => setshow(!show),
        }}
        onChangeText={(text) => {
          setpassword(text);
        }}
        secureTextEntry={show}
        value={password}
      />
      <Button
        title="ENTRAR"
        containerStyle={styles.btnentrar}
        buttonStyle={{ backgroundColor: "#25d366" }}
        onPress={() => iniciarsesion()}
      />
      <Text style={styles.txtcrearcuenta}>
        No Tienes Cuenta?
        <Text
          style={styles.cuenta}
          onPress={() => navigation.navigate("register")}
        >
          {" "}
          Crear Cuenta
        </Text>
      </Text>
      <Divider
        style={{
          backgroundColor: "#128C7E",
          height: 1,
          width: "90%",
          marginTop: 20,
        }}
      />
      <Text style={styles.txto}>O</Text>
      <View style={styles.btnlogin}>
        <TouchableOpacity style={styles.btnloginsocial}>
          <Icon
            size={24}
            type="material-community"
            name="google"
            color="#fff"
            backgroundColor="transparent"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnloginsocial}>
          <Icon
            size={24}
            type="material-community"
            name="facebook"
            color="#fff"
            backgroundColor="transparent"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
