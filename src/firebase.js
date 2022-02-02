// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWGr6K858WgFzRghKrdL6e9kb9ROvq0Hs",
  authDomain: "auth-development-ced0b.firebaseapp.com",
  projectId: "auth-development-ced0b",
  storageBucket: "auth-development-ced0b.appspot.com",
  messagingSenderId: "2121265197",
  appId: "1:2121265197:web:f69cbc24b4f5f3594b08a4",
  measurementId: "G-YMRBY9YBX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth(app)