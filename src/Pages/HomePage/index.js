import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

import { doc, getDoc } from "firebase/firestore";

export default function HomePage() {
  /* 
  const  (db, "produtos", "SF");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  */

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Você está na HomePage</Text>
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
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
