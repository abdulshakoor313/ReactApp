// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAI2E9knSVd7m65o1r7zMdMlRMt0Tt6Z9g",
  authDomain: "studentdashboard-3e027.firebaseapp.com",
  projectId: "studentdashboard-3e027",
  storageBucket: "studentdashboard-3e027.appspot.com",
  messagingSenderId: "632015880844",
  appId: "1:632015880844:web:c5818c17847c5e01d3f1a9"
};





// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore database instance
export const db = getFirestore(app);
