import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function Cardapio() {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.touch}
        activeOpacity={0.6}
        underlayColor="#ABCDEF"
        onPress={() => {}}
      >
        <Text>Clique aqui e descubra 1</Text>
      </TouchableHighlight>
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
  touch: {
    padding: 5,
  },
});
