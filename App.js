import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { stylesNw } from "./AppCSS";
import { ScrollView } from "react-native-gesture-handler";

export default function App() {
  return (
    <ScrollView style={stylesNw.container}>
      <View style={stylesNw.cardProduto}>
        <h1>Trio dos Amigos</h1>
        <h1>R$ 10,00</h1>
      </View>
    </ScrollView>
  );
}


