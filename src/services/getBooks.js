import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export async function getBooks() {
  const snapshot = await getDocs(collection(db, "libri"));
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}
