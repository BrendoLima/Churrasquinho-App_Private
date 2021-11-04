import { useState, useEffect } from "react";
import firebase from "../database/firebase";

export default function dbQuerySnapshot() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    firebase.db.collection("produtos").onSnapshot((querySnapshot) => {
      const produtos = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, value } = doc.data();
        produtos.push({
          id: doc.id,
          name,
          value,
        });
      });
      setProdutos(produtos);
    });
  }, []);
  return produtos;
}
