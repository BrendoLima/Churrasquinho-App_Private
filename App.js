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
            <View style={styles.card} key={produtos.id}>
              <Pressable onPress={showAlert}>
                <View style={styles.text}>
                  <Text>{produtos.name}</Text>
                  <Text>{"R$ " + produtos.value + ",00"}</Text>
                </View>
              </Pressable>
            </View>
          );
        })}
        {/*<View style={styles.textcss}>ok</View>*/}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "column",
  },
  list: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    margin: 3,
    padding: 10,
    minHeight: 75,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "#1212",
  },
  text: {
    flexDirection: "column",
  },

  textcss: {
    margin: 5,
    padding: 10,
    minHeight: 75,
    minWidth: "30%",

    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F194FF",
  },
});
