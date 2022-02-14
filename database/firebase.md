# Esta pasta irá conter o Endereço do seu banco de dados

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
