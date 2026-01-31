// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD96dWbK6yR3wdIHvajU4smRRBQF6B1Yz0",
  authDomain: "summarist-doug.firebaseapp.com",
  projectId: "summarist-doug",
  storageBucket: "summarist-doug.firebasestorage.app",
  messagingSenderId: "303919088535",
  appId: "1:303919088535:web:adf5420995dce7c334fad2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);