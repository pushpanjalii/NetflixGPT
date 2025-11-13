// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwClVCZfEtyP7M3yI4zGw9Bn095EKupVI",
  authDomain: "netflixgpt-8fdd3.firebaseapp.com",
  projectId: "netflixgpt-8fdd3",
  storageBucket: "netflixgpt-8fdd3.firebasestorage.app",
  messagingSenderId: "103714763900",
  appId: "1:103714763900:web:3b3273db2c05c2a13e45f9",
  measurementId: "G-X4RCV2Z2RK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();