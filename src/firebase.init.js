// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9GD9Ig-j2AwoYvLIwlRDQ22WSbNs6QeM",
  authDomain: "fir-projects-65b13.firebaseapp.com",
  projectId: "fir-projects-65b13",
  storageBucket: "fir-projects-65b13.appspot.com",
  messagingSenderId: "799681359436",
  appId: "1:799681359436:web:01daac352a9d8ef22ecee9",
  measurementId: "G-R5JG1LEQ71",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export default auth;
