import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import { Button, Icon } from "react-native-elements";
import CountryPicket from "react-native-country-picker-modal";
import { useNavigation } from "@react-navigation/native";
import { isEmpty } from "lodash";

export default function EnviarConfirmacion() {

  const [country, setcountry] = useState("PA");
  const [callingCode,setcallingCode] = useState("507");

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo.png")}
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
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#128C7E",
  },
  imglogo: {
    width: 106,
    height: 106,
    alignSelf: "center",
    marginVertical: 40,
  },
  panel: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: "center",
  },
  panelinterno: {
    flex: 1,
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
  titulo: {
    fontSize: 16,
    textAlign: "center",
    color: "#25d366",
    fontWeight: "bold",
  },
  viewtelefono: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    height: 50,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    backgroundColor: "rgba(37,211,106,0.6)",
  },
});
