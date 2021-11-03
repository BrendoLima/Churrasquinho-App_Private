import React from "react";
import { View } from "react-native";
import firestore from "../database/firebase";

export default function Comanda() {
  function database() {
    const ref = firestore().collection("produtos");
    console.log(ref);
  }
  database();
  return (
    <View>
      <h1>ola</h1>
    </View>
  );
};

