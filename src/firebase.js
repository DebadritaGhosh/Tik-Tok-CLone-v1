import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYnOJUREmxNxYoVbN3x45TdnqbyxZXePM",
  authDomain: "tiktok-clone-d11f3.firebaseapp.com",
  projectId: "tiktok-clone-d11f3",
  storageBucket: "tiktok-clone-d11f3.appspot.com",
  messagingSenderId: "361216420520",
  appId: "1:361216420520:web:17ea1897aff0c7c69a709d",
  measurementId: "G-NPL4P3GHF6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
