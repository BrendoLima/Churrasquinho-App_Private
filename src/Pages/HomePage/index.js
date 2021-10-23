import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Você está na tela HomePage</Text>
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
