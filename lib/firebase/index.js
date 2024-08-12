// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaSnVgHa7LXEj4evdnvKuLIfBNzso0SlY",
  authDomain: "expenses-tracker-bf9d6.firebaseapp.com",
  projectId: "expenses-tracker-bf9d6",
  storageBucket: "expenses-tracker-bf9d6.appspot.com",
  messagingSenderId: "695280303337",
  appId: "1:695280303337:web:5ec250ebf77d47269d8478",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const auth = getAuth(app);

export { app, db, auth };
