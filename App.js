import React, { useState } from "react";
import { Button, StyleSheet, Text, Alert, View, Pressable } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import SafeAreaView from "react-native-safe-area-context";

import dbQuerySnapshot from "./services/dbQuerySnapshot";

export default function App() {
  const showAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => Alert.alert("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => Alert.alert("Yes Pressed"),
          style: "cancel",
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            "This alert was dismissed by tapping outside of the alert dialog."
          ),
      }
    );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.list}>
        {dbQuerySnapshot().map((produtos) => {
          return (
            <Pressable onPress={showAlert}>
              <View style={styles.card} key={produtos.id}>
                <Text style={styles.text}>{produtos.name}</Text>
                <Text style={styles.text}>
                  {"R$ " + produtos.value + ",00"}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flexDirection: "column",
  },
  list: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    borderWidth: 2,
    borderRadius: 8,
    margin: 2,
    padding: 10,
    width: 110,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#9A3731",
    backgroundColor: "#1212",
  },
  text: {
    alignItems: "center",
    textAlign: "center",
  },
});
