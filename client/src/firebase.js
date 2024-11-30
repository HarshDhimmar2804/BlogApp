// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogapp-93649.firebaseapp.com",
  projectId: "blogapp-93649",
  storageBucket: "blogapp-93649.appspot.com",
  messagingSenderId: "273953020041",
  appId: "1:273953020041:web:3a5e14d186a5eb76af0e58",
};  

// Initialize Firebase
export const app = initializeApp(firebaseConfig);