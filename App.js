import React, { useState } from "react";
import { StyleSheet, Text, Alert, Pressable, View } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import SafeAreaView from "react-native-safe-area-context";

import dbQuerySnapshot from "./services/dbQuerySnapshot";

export default function App() {
  return (
    /*<SafeAreaView>*/
    <ScrollView style={styles.container}>
      <View style={styles.list}>
        {dbQuerySnapshot().map((produtos) => {
          return (
            <View
              style={styles.card}
              key={produtos.id}
              onPress={() => Alert.alert("Modal has been closed.")}
            >
              <View style={styles.text}>
                <Text>{produtos.name}</Text>
                <Text>{"R$ " + produtos.value + ",00"}</Text>
              </View>
            </View>
          );
        })}
        <Text style={styles.textcss}>ok</Text>
      </View>
    </ScrollView>

    /*</SafeAreaView>*/
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  list: {
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 10,
  },
  card: {
    maxHeight: "30%",
    backgroundColor: "#1212",
    textAlign: "center",
    justifyContent: "center",

    marginVertical: 10,
  },
  text: {
    flexDirection: "row",
    flexWrap: "wrap",
    textAlign: "center",
  },

  textcss: {
    backgroundColor: "#F194FF",
  },
});
