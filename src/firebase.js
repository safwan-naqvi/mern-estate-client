import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-352ed.firebaseapp.com",
  projectId: "mern-estate-352ed",
  storageBucket: "mern-estate-352ed.appspot.com",
  messagingSenderId: "862882299894",
  appId: "1:862882299894:web:a9dab005100fa804edd1d7",
};

export const app = initializeApp(firebaseConfig);
