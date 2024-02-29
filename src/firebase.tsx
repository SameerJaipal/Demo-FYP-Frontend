// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Add this import for Firebase Authentication

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA50VDaxWL_eigX7yAk0x7DjE4GpcUbSI8",
  authDomain: "tax-tajweez.firebaseapp.com",
  projectId: "tax-tajweez",
  storageBucket: "tax-tajweez.appspot.com",
  messagingSenderId: "622625297167",
  appId: "1:622625297167:web:62c7bf27c5cc1b002c247a",
  measurementId: "G-MRCCWB778M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app); // Initialize Firebase Authentication service
