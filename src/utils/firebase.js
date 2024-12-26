// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMitqYGFeyKtqXxmbY2dcLbQ9234s0sEE",
  authDomain: "netflixgpt-86e54.firebaseapp.com",
  projectId: "netflixgpt-86e54",
  storageBucket: "netflixgpt-86e54.firebasestorage.app",
  messagingSenderId: "276633051667",
  appId: "1:276633051667:web:5c2044f41bfe28d78b15e6",
  measurementId: "G-BLGD8S3N66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()