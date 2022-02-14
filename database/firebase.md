# Esta pasta irá conter o Endereço do seu banco de dados


> import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBwSBKlBd8jXXVGQZKlu6eM3ziWloB_FzE",
  authDomain: "churrasquinho-ce9bb.firebaseapp.com",
  projectId: "churrasquinho-ce9bb",
  storageBucket: "churrasquinho-ce9bb.appspot.com",
  messagingSenderId: "290446283786",
  appId: "1:290446283786:web:8bab674975961e09e37bf3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};
