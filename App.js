import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/router";

export default function App() {
  return (
    <NavigationContainer>
      <Routes></Routes>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFCA5D",
    alignItems: "center",
    justifyContent: "center",
  },
});
