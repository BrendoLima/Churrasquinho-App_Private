import { Alert, StyleSheet, Text, View, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <Pressable onPress={Alert("Estou sendo Prescionado")}>
        <Text>Clique aqui e descubra</Text>
        <Text>Clique aqui e descubra</Text>
      </Pressable>

      <StatusBar style="auto" />
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
});
