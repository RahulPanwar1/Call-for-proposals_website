// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// CREATE A FIREBASE PROJECT AND PUT YOUR FIREBASECONFIG HERE FROM YOUR "ADD FIREBASE TO YOUR WEB APP"
import firebaseConfig from './firebaseConfig'; // Or make a new file and put your firebaseconfir there,
// AFTER THAT ENABLE THE GOOGLE LOGIN FROM YOUR FIREBASE PROJECT TO ACTIVATE LOGIN/LOGOUT ACTIVITY

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);