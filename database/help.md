# Instruções e duvidas.

### Esta pasta irá conter o Endereço (Chave de acesso) do seu banco de dados.

### Crie um arquivo chamado "firebase.js" nesta pasta

### Corpo básico do arquivo:
```
import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};
```
