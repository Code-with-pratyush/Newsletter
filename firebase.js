import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVStg46OO_i78zOhZkvFiZbV1aaviLkuE",
  authDomain: "newsletter-f1542.firebaseapp.com",
  projectId: "newsletter-f1542",
  storageBucket: "newsletter-f1542.appspot.com",
  messagingSenderId: "522193210337",
  appId: "1:522193210337:web:d8e5d471a994c82a0c60a0",
  measurementId: "G-C0FY4DFLSJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//creating a database
const db = firebaseApp.firestore();


export default db;