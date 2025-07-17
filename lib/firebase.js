// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAI2E9knSVd7m65o1r7zMdMlRMt0Tt6Z9g",
  authDomain: "studentdashboard-3e027.firebaseapp.com",
  databaseURL: "https://studentdashboard-3e027-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "studentdashboard-3e027",
  storageBucket: "studentdashboard-3e027.appspot.com",
  messagingSenderId: "632015880844",
  appId: "1:632015880844:web:c5818c17847c5e01d3f1a9"
};

const app = initializeApp(firebaseConfig);

// ✅ Rename to `rtdb`
export const rtdb = getDatabase(app);
