import React, { useState } from "react";
import { Button, StyleSheet, Text, Alert, View, Pressable } from "react-native";
import { stylesNw } from "./AppCSS";
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
    <ScrollView style={stylesNw.container}>
      <View style={stylesNw.list}>
        {dbQuerySnapshot().map((produtos) => {
          return (
            <Pressable onPress={showAlert}>
              <View style={stylesNw.card} key={produtos.id}>
                <Text style={stylesNw.text}>{produtos.name}</Text>
                <Text style={stylesNw.text}>
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
