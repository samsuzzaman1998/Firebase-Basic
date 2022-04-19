// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBk-qOr7laa9QFct9wS5nnBYf_Ga2FTzoc",
    authDomain: "login-with-email-and-pas-1c46e.firebaseapp.com",
    projectId: "login-with-email-and-pas-1c46e",
    storageBucket: "login-with-email-and-pas-1c46e.appspot.com",
    messagingSenderId: "401964263396",
    appId: "1:401964263396:web:ba067e1e2268f102a689f1",
};

// Initialize Firebase
const FirebaseAppForEmailAndPassword = initializeApp(firebaseConfig);

export default FirebaseAppForEmailAndPassword;
