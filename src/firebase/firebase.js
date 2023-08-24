// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZtsfuvgR54mIzSRjo4jtBVEkjYI3QyrA",
  authDomain: "expense-tracker-6f40b.firebaseapp.com",
  projectId: "expense-tracker-6f40b",
  storageBucket: "expense-tracker-6f40b.appspot.com",
  messagingSenderId: "951517607928",
  appId: "1:951517607928:web:b5c0956b18c3cb81fcc80d",
  measurementId: "G-8DQ9RJN7HH"
};

export const app = initializeApp(firebaseConfig);
export const auth= getAuth();
export const db = getFirestore();
export const storage=getStorage();