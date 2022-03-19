// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcKnbqdMD-XlqF48ZjB6hveon_-wgL77o",
  authDomain: "react-firebase-fb193.firebaseapp.com",
  projectId: "react-firebase-fb193",
  storageBucket: "react-firebase-fb193.appspot.com",
  messagingSenderId: "61942588494",
  appId: "1:61942588494:web:efb4c0003c6c1569624f1f",
  measurementId: "G-6ZZJ0JLQDJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
