import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F6F8",
    flex: 1,
    marginTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: "center",
    paddingTop: 20,
  },
  input: {
    width: "90%",
    marginTop: 20,
    height: 50,
  },
  btnentrar: {
    width: "90%",
    marginTop: 20,
  },
  txtcrearcuenta: {
    marginTop: 20,
  },
  cuenta: {
    color: "#128c7e",
    fontFamily: "Roboto",
    fontSize: 15,
  },
  txto: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    color: "#128c7e",
  },
  btnlogin: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  btnloginsocial: {
    backgroundColor: "#25d366",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
