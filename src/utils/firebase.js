import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrBWqAtMLZnDNdlp30Q0npdGqN_eKzqeI",
  authDomain: "netflix-553b9.firebaseapp.com",
  projectId: "netflix-553b9",
  storageBucket: "netflix-553b9.firebasestorage.app",
  messagingSenderId: "359479891211",
  appId: "1:359479891211:web:d8d9e2bcb76acac530fe0e",
  measurementId: "G-33N6E05RJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth()