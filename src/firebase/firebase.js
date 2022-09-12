// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1z8qwStLuhAbzrDl8SZAtrbtWFzu67IE",
    authDomain: "fitzen-68ec0.firebaseapp.com",
    projectId: "fitzen-68ec0",
    storageBucket: "fitzen-68ec0.appspot.com",
    messagingSenderId: "240477692796",
    appId: "1:240477692796:web:a0db66207ce5af0975baf9",
    measurementId: "G-Y052KR6JBY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);