import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB6wpQbMPeUlGMkoY57bAnyVJU6GWcJ59I",
  authDomain: "clone-ab6bb.firebaseapp.com",
  projectId: "clone-ab6bb",
  storageBucket: "clone-ab6bb.appspot.com",
  messagingSenderId: "245648918497",
  appId: "1:245648918497:web:871a46d2f2962f202ef4a0",
  measurementId: "G-SMJH1054DL",
};
//initialize firebase with firebase config parametrs
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
