import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyD_8YG1AJ3cArFimFaQSSSm7gDKtaHdo3I",
  authDomain: "crown-db-9ce71.firebaseapp.com",
  databaseURL: "https://crown-db-9ce71.firebaseio.com",
  projectId: "crown-db-9ce71",
  storageBucket: "crown-db-9ce71.appspot.com",
  messagingSenderId: "285804220422",
  appId: "1:285804220422:web:a262b930c1de4d92"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
