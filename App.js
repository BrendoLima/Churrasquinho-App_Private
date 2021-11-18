import React from "react";
import { View, Pressable, Alert } from "react-native";
import { stylesNw } from "./AppCSS";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
import Cardproduto from "./components/cardProdutos";

export default function App() {
  return (
    <View>
      <ScrollView style={stylesNw.container}>
        <Cardproduto></Cardproduto>
        <Cardproduto></Cardproduto>
        <Cardproduto></Cardproduto>
        <Cardproduto></Cardproduto>
        <Cardproduto></Cardproduto>
        <Cardproduto></Cardproduto>
        <Cardproduto></Cardproduto>
        <Cardproduto></Cardproduto>
        <Cardproduto></Cardproduto>
        <Cardproduto></Cardproduto>
        <Cardproduto></Cardproduto>
      </ScrollView>
      <Pressable style={stylesNw.comandaIcon} onPress={Alert.alert("ate")}>
        <FontAwesome5 name="list-ul" size={15} color="white" />
      </Pressable>
    </View>
  );
}
