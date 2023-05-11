import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";



// const firebaseConfig = {
//     apiKey: "AIzaSyAflcyzycTgV26J1oj-vTeeK4yJp3rmW9w",
//     authDomain: "jodiexpress-ee2b1.firebaseapp.com",
//     projectId: "jodiexpress-ee2b1",
//     storageBucket: "jodiexpress-ee2b1.appspot.com",
//     messagingSenderId: "825856782760",
//     appId: "1:825856782760:web:ace1e5c0ee1545cef5ed9d",
//     measurementId: "G-DYE12QPJ2X"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyCT8NFghjHZ-s79XUA9wvHZOLNuVXcNNlU",
  authDomain: "jodiexpress2.firebaseapp.com",
  projectId: "jodiexpress2",
  storageBucket: "jodiexpress2.appspot.com",
  messagingSenderId: "417080760406",
  appId: "1:417080760406:web:7f514534de7d29f155c3f7",
  measurementId: "G-WMVDY5GVQE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();

export { app, auth, storage ,ref };


