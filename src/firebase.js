import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBC_INFQnT2Eo8_LCgbDDqYgcv7vNBe0",
  authDomain: "biblioteca-test-4d180.firebaseapp.com",
  projectId: "biblioteca-test-4d180",
  storageBucket: "biblioteca-test-4d180.firebasestorage.app",
  messagingSenderId: "215724672724",
  appId: "1:215724672724:web:07d05bc8434b8609c1b29",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
