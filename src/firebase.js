import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "LA_TUA_API_KEY",
  authDomain: "LA_TUA_AUTHDOMAIN",
  projectId: "IL_TUO_PROJECTID",
  storageBucket: "IL_TUO_STORAGEBUCKET",
  messagingSenderId: "IL_TUO_SENDERID",
  appId: "IL_TUO_APPID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
