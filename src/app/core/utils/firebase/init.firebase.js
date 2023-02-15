import { initializeApp } from "firebase/app";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBru4kVZay6Oiy0Wo-TP5Dwvscyiw4OTlU",
  authDomain: "health-nation-34d3e.firebaseapp.com",
  projectId: "health-nation-34d3e",
  storageBucket: "health-nation-34d3e.appspot.com",
  messagingSenderId: "829142759392",
  appId: "1:829142759392:web:086511d59f26c571591d85",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
