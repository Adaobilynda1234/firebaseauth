// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxBt7JAbIaKerQnCWUwS4pB9Yjh8NTHkI",
  authDomain: "fir-auth-635f5.firebaseapp.com",
  projectId: "fir-auth-635f5",
  storageBucket: "fir-auth-635f5.appspot.com",
  messagingSenderId: "366621795085",
  appId: "1:366621795085:web:267c582c18623152720644",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
