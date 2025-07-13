// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeuoKAch-e0VzJo16fRtLAvYJ5USd5jyY",
  authDomain: "sauflex-orders-310a2.firebaseapp.com",
  projectId: "sauflex-orders-310a2",
  storageBucket: "sauflex-orders-310a2.appspot.com",
  messagingSenderId: "334646608528",
  appId: "1:334646608528:web:3d8b82ed96a47d12a9bd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);