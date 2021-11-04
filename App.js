import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import dbQuerySnapshot from "./services/dbQuerySnapshot";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {dbQuerySnapshot().map((produtos) => {
          return (
            <View style={styles.card} key={produtos.id} onPress={() => {}}>
              <View style={styles.text}>
                <Text>{produtos.name}</Text>
                <Text>{produtos.value}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  text: {
    textAlign: "center",
  },
  card: {
    textAlign: "center",
  },
});
