import React, { useState, useRef } from "react";
import { View, Text, TextInput, Image } from "react-native";
import { Button, Icon } from "react-native-elements";
import CountryPicket from "react-native-country-picker-modal";
import { useNavigation } from "@react-navigation/native";
import { isEmpty } from "lodash";
import FirebaseRecaptcha from "../../../Utils/FirebaseRecapcha";

import { styles } from "./EnviarConfirmacion.styles";

export function EnviarConfirmacion() {
  const [country, setcountry] = useState("PA");
  const [callingCode, setcallingCode] = useState("507");
  const [phone, setphone] = useState("");
  const recaptchaVerifier = useRef();
  const inputphone = useRef();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/logo.png")}
        style={styles.imglogo}
      />
      <View style={styles.panel}>
        <View
          style={{
            borderBottomColor: "#25d366",
            borderBottomWidth: 2,
            width: 100,
          }}
        />
        <View style={styles.panelinterno}>
          <Icon
            name="whatsapp"
            type="material-community"
            size={100}
            color="#25D366"
          />
          <Text style={styles.titulo}>Favor ingresa tu numero de whatsapp</Text>
          <View style={styles.viewtelefono}>
            <CountryPicket
              withFlag
              withCallingCode
              withFilter
              withCallingCodeButton
              countryCode={country}
              onSelect={(country) => {
                setcountry(country.cca2);
                setcallingCode(...country.callingCode);
              }}
            />
            <Text style={{ color: "#fff" }}> | </Text>
            <TextInput
              placeholder="Numero de Whatsapp"
              style={styles.input}
              placeholderTextColor="#fff"
              onChangeText={(text) => setphone(text)}
              value={phone}
            />
          </View>
          <Button
            title="Confirmar Numero"
            buttonStyle={{ backgroundColor: "#25d366", marginHorizontal: 20 }}
            containerStyle={{ marginVertical: 20 }}
          />
        </View>
      </View>
      <FirebaseRecaptcha referencia={recaptchaVerifier} />
    </View>
  );
}
