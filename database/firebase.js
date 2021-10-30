import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBwSBKlBd8jXXVGQZKlu6eM3ziWloB_FzE",
  authDomain: "churrasquinho-ce9bb.firebaseapp.com",
  projectId: "churrasquinho-ce9bb",
  storageBucket: "churrasquinho-ce9bb.appspot.com",
  messagingSenderId: "290446283786",
  appId: "1:290446283786:web:8bab674975961e09e37bf3",
});

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = getFirestore();

export default {
  firebase,
  db,
};
