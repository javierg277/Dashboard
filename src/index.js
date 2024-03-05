// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY3q_VnR7zkd5zX3jrJvokWudDK5HvUJM",
  authDomain: "sepalo-reporting.firebaseapp.com",
  projectId: "sepalo-reporting",
  storageBucket: "sepalo-reporting.appspot.com",
  messagingSenderId: "671619496123",
  appId: "1:671619496123:web:71cbcbc855457a29ab519e",
  measurementId: "G-HPXLEB9CLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);