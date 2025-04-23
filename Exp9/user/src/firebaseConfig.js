// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa-p0Tx6sSDh9tyDE4pazplbdZmcPgZv8",
  authDomain: "first-firebase-ef5fa.firebaseapp.com",
  projectId: "first-firebase-ef5fa",
  storageBucket: "first-firebase-ef5fa.firebasestorage.app",
  messagingSenderId: "1070799592430",
  appId: "1:1070799592430:web:c4a4f7f150ce8f0be18cff",
  measurementId: "G-DT0K36EY6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);