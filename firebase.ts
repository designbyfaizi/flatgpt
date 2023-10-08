// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2Jq-g7Dwv35wcavxJ8Ohl3YaApBHUeJk",
  authDomain: "flatgpt.firebaseapp.com",
  projectId: "flatgpt",
  storageBucket: "flatgpt.appspot.com",
  messagingSenderId: "18132244209",
  appId: "1:18132244209:web:e4931f0153789f7564fb50",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
