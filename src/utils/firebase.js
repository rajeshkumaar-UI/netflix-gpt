// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC452zi0QXhOIshZjdIVOi-g8v5Y51su_0",
  authDomain: "rajesh-redux-demo.firebaseapp.com",
  projectId: "rajesh-redux-demo",
  storageBucket: "rajesh-redux-demo.firebasestorage.app",
  messagingSenderId: "327356319923",
  appId: "1:327356319923:web:f7df6927cae9b626fc08c6",
  measurementId: "G-QX99H1DY44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();