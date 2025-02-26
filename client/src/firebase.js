// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-33798.firebaseapp.com",
  projectId: "mern-estate-33798",
  storageBucket: "mern-estate-33798.firebasestorage.app",
  messagingSenderId: "885376765328",
  appId: "1:885376765328:web:e5a7d598a3c96d76cf7715",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
