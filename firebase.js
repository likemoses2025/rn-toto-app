import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORGE_BUCKET,
  SENDER_ID,
  APP_ID,
} from "@env";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${API_KEY}`,
  authDomain: `${AUTH_DOMAIN}`,
  projectId: `${PROJECT_ID}`,
  storageBucket: `${STORGE_BUCKET}`,
  messagingSenderId: `${SENDER_ID}`,
  appId: `${APP_ID}`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service

export default app;
