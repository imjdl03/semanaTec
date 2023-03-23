// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRoZWkIbBKaJzdxffZUcVRUAW5HUATQqg",
  authDomain: "countries-for-me.firebaseapp.com",
  projectId: "countries-for-me",
  storageBucket: "countries-for-me.appspot.com",
  messagingSenderId: "646354377127",
  appId: "1:646354377127:web:1f7f021fb3e59ea068fe82",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
