import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import { Button } from "react-native-elements";
import CountryPicket from "react-native-country-picker-modal";
import { useNavigation } from "@react-navigation/native";
import { isEmpty } from "lodash";

export default function EnviarConfirmacion() {
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
  panel:{
      flex: 1,
      backgroundColor:"#fff",
      paddingTop: 20,
      borderTopRightRadius: 50,
      borderTopLeftRadius:50,
      alignItems:"center"
  }
});
