import { StyleSheet } from "react-native";
const stylesNw = StyleSheet.create({
  container: {
    marginTop: 25,
    flexDirection: "column",
  },
  list: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    borderWidth: 2,
    borderRadius: 8,
    margin: 2,
    padding: 10,
    width: 110,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#9A3731",
    backgroundColor: "#1212",
  },
  text: {
    alignItems: "center",
    textAlign: "center",
  },
});
export { stylesNw };
