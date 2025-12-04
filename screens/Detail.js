import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useEffect, useState } from "react";
import { getBooksByGenere, getBooksByDewey } from "../src/services/getBooks";

// MAPPA GENERI → CLASSE DEWEY
const GENERE_TO_DEWEY = {
  "01-Arte e Fotografia": "700",
  "02-Medicina": "610",
  "03-Scienze": "500",
  "04-Cinema-Tv-Spettacolo": "790",
  "05-Musica": "780",
  "06-Società-Politica-Comunicazione": "300",
  "07-Economia-Management": "330",
  "08-Diritto": "340",
  "09-Guide turistiche-Viaggi": "910",
  "10-Religioni (Orientali)": "290",
  "11-Religioni (Islam)": "297",
  "12-Storia delle religioni": "200",
};

export default function Detail({ route }) {
  const { tipo, valore } = route.params;

  const [books, setBooks] = useState([]);

  // Carica libri filtrati da Firestore
  useEffect(() => {
    if (tipo === "genere") {
      getBooksByGenere(valore).then(setBooks);
    }
    if (tipo === "dewey") {
      getBooksByDewey(valore).then(setBooks);
    }
  }, []);

  // Ottieni la classe Dewey dal genere
  const deweyFromGenere =
    tipo === "genere" ? GENERE_TO_DEWEY[valore] || "" : valore;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* INTESTAZIONE */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Biblioteca Calicantus</Text>
        <Text style={styles.headerSubtitle}>Via Duilio, 3 Comiso -Rg</Text>
        <Text style={styles.headerSubtitle}>
          www...............org / Fb................
        </Text>
      </View>

      {/* BOX CLASSI / GENERI */}
      <View style={styles.infoBox}>
        <View style={styles.row}>
          <Text style={styles.label}>Classi di Dewey</Text>
          <Text style={styles.value}>{deweyFromGenere}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Generi</Text>
          <Text style={styles.value}>{tipo === "genere" ? valore : ""}</Text>
        </View>
      </View>

      {/* LISTA LIBRI - SCORRIMENTO ORIZZONTALE */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalContainer}
      >
        {books.map((book) => (
          <View key={book.id} style={styles.bookCardHorizontal}>
            
            {/* COPERTINA */}
            <Image
              source={{
                uri:
                  book.images?.[0] ||
                  "https://via.placeholder.com/400x600?text=Nessuna+Immagine",
              }}
              style={styles.coverHorizontal}
            />

            {/* DETTAGLI */}
            <View style={styles.textZoneHorizontal}>
              <Text style={styles.line}>{book.posizione}</Text>
              <Text style={styles.line}>{book.titolo}</Text>

              {book.altro1 ? (
                <Text style={styles.line}>{book.altro1}</Text>
              ) : null}

              {book.autore_nome || book.autore_cognome ? (
                <Text style={styles.line}>
                  {book.autore_nome} {book.autore_cognome}
                </Text>
              ) : null}

              {book.altro2 ? (
                <Text style={styles.line}>{book.altro2}</Text>
              ) : null}
            </View>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  /* CONTAINER */
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },

  /* INTESTAZIONE */
  header: {
    backgroundColor: "#d9e6f7",
    borderColor: "#666",
    borderWidth: 1,
    paddingVertical: 12,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 26,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "center",
  },
  headerSubtitle: {
    textAlign: "center",
    fontSize: 14,
  },

  /* BOX CLASSI / GENERI */
  infoBox: {
    backgroundColor: "#f6c19c",
    borderWidth: 1,
    borderColor: "#666",
    padding: 10,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
  },
  value: {
    fontSize: 20,
  },

  /* SCROLL ORIZZONTALE */
  horizontalContainer: {
    paddingVertical: 20,
  },

  bookCardHorizontal: {
    width: 300,
    borderWidth: 1,
    borderColor: "#666",
    marginRight: 20,
    padding: 10,
    backgroundColor: "#fff",
  },

  coverHorizontal: {
    width: "100%",
    height: undefined,
    aspectRatio: 0.62,
    borderWidth: 1,
    borderColor: "#333",
    marginBottom: 10,
  },

  textZoneHorizontal: {
    paddingHorizontal: 5,
  },

  line: {
    fontSize: 18,
    marginBottom: 4,
  },
});

