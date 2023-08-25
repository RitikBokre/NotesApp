import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClDayW4s7GbBvB59htGgjmelzsiNG58aw",
  authDomain: "react-notes-d9cee.firebaseapp.com",
  projectId: "react-notes-d9cee",
  storageBucket: "react-notes-d9cee.appspot.com",
  messagingSenderId: "241680734412",
  appId: "1:241680734412:web:6f16005542a58ad5d2ca69"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
