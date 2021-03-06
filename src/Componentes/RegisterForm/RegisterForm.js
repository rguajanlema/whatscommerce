import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, Input, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { validaremail } from "../../Utils/Utils";
import { isEmpty, size } from "lodash";

import Loading from "../Loading";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { styles } from "./RegisterForm.styles";

const auth = getAuth();

export function RegisterForm(props) {
  const { toastRef } = props;
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [repetirpassword, setrepetirpassword] = useState("");
  const [show, setshow] = useState(true);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  function createcuenta() {
    if (isEmpty(email) || isEmpty(password) || isEmpty(repetirpassword)) {
      toastRef.current.show("Todos los campos son obligatorios");
    } else if (!validaremail(email)) {
      toastRef.current.show("Correo no es valido");
    } else if (password !== repetirpassword) {
      toastRef.current.show("Las contrasenas tienen que ser iguales");
    } else if (size(password) < 6) {
      toastRef.current.show("La contrasenia debe tener almenos 6 caracteres");
    } else {
      setLoading(true);

      createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
          toastRef.current.show("Se ha creado el usuario correctamente");
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          toastRef.current.show(
            "Ha ocurrido un error o puede que este usuario este registrado"
          );
        });
    }
  }

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
        placeholder="Contrase??a"
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
      <Input
        placeholder="Repetir Contrase??a"
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
          setrepetirpassword(text);
        }}
        secureTextEntry={show}
        value={repetirpassword}
      />
      <Button
        title="CREAR CUENTA"
        containerStyle={styles.btnentrar}
        buttonStyle={{ backgroundColor: "#25d366" }}
        onPress={() => createcuenta()}
      />
      <Button
        title="INICIAR SESION"
        containerStyle={styles.btnentrar}
        buttonStyle={{ backgroundColor: "#128C7E" }}
        onPress={() => navigation.goBack()}
      />
      <Loading isVisible={loading} text="Favor de esperar" />
    </View>
  );
}
