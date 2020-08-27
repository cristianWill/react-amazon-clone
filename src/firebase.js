import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCTPLV0wlQQls94yx3Ool8Kukqi_yuoxkM",
  authDomain: "clone-a3b35.firebaseapp.com",
  databaseURL: "https://clone-a3b35.firebaseio.com",
  projectId: "clone-a3b35",
  storageBucket: "clone-a3b35.appspot.com",
  messagingSenderId: "647567809758",
  appId: "1:647567809758:web:9bdf235e43cb3d9914b64f",
  measurementId: "G-CPESFKKNZ1",
});

const auth = firebase.auth;

export { auth };
