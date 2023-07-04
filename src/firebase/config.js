import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init Services
const projectFireStore = firebase.firestore();

export { projectFireStore };
