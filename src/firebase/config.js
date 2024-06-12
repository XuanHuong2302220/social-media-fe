// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0i5u-w99WiHWufFr9_nVYRn7j1wgw7is",
  authDomain: "social-network-2b999.firebaseapp.com",
  projectId: "social-network-2b999",
  storageBucket: "social-network-2b999.appspot.com",
  messagingSenderId: "407127023167",
  appId: "1:407127023167:web:2dceda13badb74b01f628a",
  measurementId: "G-ZLQT9LDJW2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
