// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrEkJPcuMVFhWJ3rlbm0oLr4YRc6cvnrE",
    authDomain: "learning-firebase-dfea0.firebaseapp.com",
    projectId: "learning-firebase-dfea0",
    storageBucket: "learning-firebase-dfea0.appspot.com",
    messagingSenderId: "1035951006973",
    appId: "1:1035951006973:web:1750b0d89fd40a1f378a94",
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export default FirebaseApp;
