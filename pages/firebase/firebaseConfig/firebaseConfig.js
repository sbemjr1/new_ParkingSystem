// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function firebaseConfig() {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC2X64sTtnuCGA5zwYwjplQdPIzPVkkRow",
    authDomain: "yolov7-pklot.firebaseapp.com",
    databaseURL: "https://yolov7-pklot-default-rtdb.firebaseio.com",
    projectId: "yolov7-pklot",
    storageBucket: "yolov7-pklot.appspot.com",
    messagingSenderId: "568242926157",
    appId: "1:568242926157:web:fae508bdf8e38378a72204",
    // apiKey: process.env.NEXT_PUBLIC_API_KEY,
    // authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    // databaseURL: process.env.NEXT_PUBLIC_DB_URL,
    // projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    // storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    // messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    // appId: process.env.NEXT_PUBLIC_APP_ID,
  };
  // Initialize Firebase
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  return getDatabase(app);
}

export default firebaseConfig;
