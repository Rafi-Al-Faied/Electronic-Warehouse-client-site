// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdzlMO6xCR8j2JvEEXA-j-LlzvehshOU0",
  authDomain: "electronic-warehouse-f4e89.firebaseapp.com",
  projectId: "electronic-warehouse-f4e89",
  storageBucket: "electronic-warehouse-f4e89.appspot.com",
  messagingSenderId: "282794693196",
  appId: "1:282794693196:web:04d35404f68f4d2c925ae9",
  measurementId: "G-93C0F7KFEK"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
