import React from "react";
import { Text, View, Image } from "react-native";
import { stylesNw } from "../AppCSS";

export default function Cardproduto() {
  return (
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
  );
}
