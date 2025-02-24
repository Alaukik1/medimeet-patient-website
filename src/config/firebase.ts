import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCKRLuNn6JIwAxJ4GSK4o5sAIBdP1ptm3o",
  authDomain: "serenity-consumer.firebaseapp.com",
  projectId: "serenity-consumer",
  storageBucket: "serenity-consumer.firebasestorage.app",
  messagingSenderId: "942013221185",
  appId: "1:942013221185:web:c5354f1d6390b622d8b9c0",
  measurementId: "G-H7FSSD71S8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app); 