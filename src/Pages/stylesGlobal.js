import react, { StyleSheet } from "react";
export default function stylesGlobal() {
  return console.log("Estou Aqui");
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#123456",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
