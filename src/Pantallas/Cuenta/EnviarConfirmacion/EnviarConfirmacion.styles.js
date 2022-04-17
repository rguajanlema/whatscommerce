import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  input: {
    width: "80%",
    height: 50,
    marginLeft: 5,
  },
});
