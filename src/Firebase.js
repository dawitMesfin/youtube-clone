// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhgZ3UFZs1EPmEsWOlZCoLz8xdrj9gQjk",
  authDomain: "youtbe-clone-6f9a5.firebaseapp.com",
  projectId: "youtbe-clone-6f9a5",
  storageBucket: "youtbe-clone-6f9a5.appspot.com",
  messagingSenderId: "234403338676",
  appId: "1:234403338676:web:5e3664c7aa4791fdd77ae1",
  measurementId: "G-L0XLY2BMCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);