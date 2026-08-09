import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAdS3MQpZmTl3Tjtis5Ia4L4kzy9aVfUNo",
  authDomain: "campuspulse-75e95.firebaseapp.com",
  projectId: "campuspulse-75e95",
  storageBucket: "campuspulse-75e95.firebasestorage.app",
  messagingSenderId: "1097940567611",
  appId: "1:1097940567611:web:1d5e95022f0f00b20efe1e",
  measurementId: "G-7LMDNCWQLT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);