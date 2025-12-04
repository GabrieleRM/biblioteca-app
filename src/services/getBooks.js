import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

// === PRENDI TUTTI I LIBRI ===
export async function getAllBooks() {
  const snapshot = await getDocs(collection(db, "libri"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// === FILTRA PER GENERE ===
export async function getBooksByGenere(genere) {
  const q = query(
    collection(db, "libri"),
    where("genere", "==", genere)
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// === FILTRA PER CLASSE DEWEY ===
export async function getBooksByDewey(dewey) {
  const q = query(
    collection(db, "libri"),
    where("dewey", "==", dewey)
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export function getBooks() {
  return getAllBooks();
}

