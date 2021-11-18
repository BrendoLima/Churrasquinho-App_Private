import React, { useState } from "react";
import { Button, StyleSheet, Text, View, Image, Pressable } from "react-native";
import { stylesNw } from "./AppCSS";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";

export default function App() {
  return (
    <ScrollView style={stylesNw.container}>
      <View style={stylesNw.cardProduto}>
        <View>
          <Text style={stylesNw.cardText}>Trio dos Amigos</Text>
          <Text style={stylesNw.cardText}>R$ 10,00</Text>
        </View>
        <Image
          style={stylesNw.cardImage}
          source={{
            uri: "https://cms.displaycard.com.br/system/post_images/images/000/006/221/post/Chopp_Brahma_petiscos.jpg?1535637562",
          }}
        />
      </View>
      <View style={stylesNw.cardProduto}>
        <View>
          <Text style={stylesNw.cardText}>Trio dos Amigos</Text>
          <Text style={stylesNw.cardText}>R$ 10,00</Text>
        </View>
        <Image
          style={stylesNw.cardImage}
          source={{
            uri: "https://cms.displaycard.com.br/system/post_images/images/000/006/221/post/Chopp_Brahma_petiscos.jpg?1535637562",
          }}
        />
      </View>
      <Pressable style={stylesNw.comandaIcon} onPress={console.log("ate")}>
        <FontAwesome5 name="list-ul" size={15} color="white" />
      </Pressable>
    </ScrollView>
  );
}


