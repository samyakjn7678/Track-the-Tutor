// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU3rZg5zTRgQlCrSHEkxSn2G2nZXtAaW0",
  authDomain: "trackthetutor-39d52.firebaseapp.com",
  databaseURL: "https://trackthetutor-39d52-default-rtdb.firebaseio.com",
  projectId: "trackthetutor-39d52",
  storageBucket: "trackthetutor-39d52.appspot.com",
  messagingSenderId: "568268650676",
  appId: "1:568268650676:web:ad4be00f7cc04e5e3e7fe1"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

// reference your database
const TracktheTutorDB = firebase.database().ref('TracktheTutor')

document.getElementById('TracktheTutor').addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventdefault();
}

const getElementVal = (id) => {    
}
