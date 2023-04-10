import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAflcyzycTgV26J1oj-vTeeK4yJp3rmW9w",
    authDomain: "jodiexpress-ee2b1.firebaseapp.com",
    projectId: "jodiexpress-ee2b1",
    storageBucket: "jodiexpress-ee2b1.appspot.com",
    messagingSenderId: "825856782760",
    appId: "1:825856782760:web:ace1e5c0ee1545cef5ed9d",
    measurementId: "G-DYE12QPJ2X"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();
// const analytics = getAnalytics(app);

export { app, auth };


