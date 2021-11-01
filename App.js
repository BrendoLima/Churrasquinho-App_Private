import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Router from "./router";

export default function App() {
  return (
    <NavigationContainer>
      <Router></Router>
    </NavigationContainer>
  );
}


