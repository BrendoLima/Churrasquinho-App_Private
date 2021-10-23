import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styleGlobal from "../stylesGlobal";

export default function Comand() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Você está na tela Comand</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
