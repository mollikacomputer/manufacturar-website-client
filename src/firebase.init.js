// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC47YXPmuJlnSSGUGlwDR_ZU8Wm2U8yOlM",
  authDomain: "ass12-a1d3e.firebaseapp.com",
  projectId: "ass12-a1d3e",
  storageBucket: "ass12-a1d3e.appspot.com",
  messagingSenderId: "954404874612",
  appId: "1:954404874612:web:1352f60a9028edc261e421"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;