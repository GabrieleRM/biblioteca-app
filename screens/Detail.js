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

  useEffect(() => {
    if (tipo === "genere") getBooksByGenere(valore).then(setBooks);
    if (tipo === "dewey") getBooksByDewey(valore).then(setBooks);
  }, []);

  const deweyFromGenere =
    tipo === "genere" ? GENERE_TO_DEWEY[valore] || "" : valore;

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* HEADER COME LA HOME */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Biblioteca Calicantus</Text>
        <Text style={styles.headerSubtitle}>Via Duilio, 3 Comiso -Rg</Text>
        <Text style={styles.headerSubtitle}>www...............org / Fb................</Text>
      </View>

      {/* BOX INFO COME LA HOME */}
      <View style={styles.infoBox}>
        <View style={styles.row}>
          <Text style={styles.label}>Classi di Dewey</Text>
          <Text style={styles.value}>{deweyFromGenere}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Genere</Text>
          <Text style={styles.value}>{tipo === "genere" ? valore : ""}</Text>
        </View>
      </View>

      {/* LIBRI ORIZZONTALI */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalContainer}
      >
        {books.map((book) => (
          <View key={book.id} style={styles.bookCard}>

            <Image
              source={{
                uri:
                  book.images?.[0] ||
                  "https://via.placeholder.com/400x600?text=Nessuna+Immagine",
              }}
              style={styles.cover}
            />

            <View style={styles.textZone}>
              <Text style={styles.line}>{book.posizione}</Text>
              <Text style={styles.line}>{book.titolo}</Text>

              {book.altro1 ? <Text style={styles.line}>{book.altro1}</Text> : null}

              {(book.autore_nome || book.autore_cognome) && (
                <Text style={styles.line}>
                  {book.autore_nome} {book.autore_cognome}
                </Text>
              )}

              {book.altro2 ? <Text style={styles.line}>{book.altro2}</Text> : null}
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
    backgroundColor: "#F4EDE2",
    paddingBottom: 40,
    paddingTop: 10,
  },

  /* HEADER IDENTICO ALLA HOME */
  header: {
    backgroundColor: "#FBF7F0",
    borderWidth: 1,
    borderColor: "#E0D3C2",
    paddingVertical: 14,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    color: "#2B1D1A",
  },
  headerSubtitle: {
    textAlign: "center",
    fontSize: 14,
    color: "#4A3C31",
  },

  /* BOX INFO IDENTICO A HOME */
  infoBox: {
    backgroundColor: "#FBF7F0",
    borderWidth: 0,
    borderColor: "#C9A66B",
    padding: 14,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2B1D1A",
  },
  value: {
    fontSize: 20,
    color: "#4A3C31",
  },

  /* LIBRI - STILE CARD IDENTICO ALLA HOME */
  horizontalContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
  },

  bookCard: {
    width: 260,
    backgroundColor: "#FBF7F0",
    borderWidth: 1,
    borderColor: "#E0D3C2",
    borderRadius: 12,
    marginRight: 20,
    padding: 12,
  },

  cover: {
    width: "100%",
    aspectRatio: 0.62,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0D3C2",
    marginBottom: 12,
  },

  textZone: {
    paddingHorizontal: 4,
  },

  line: {
    fontSize: 18,
    marginBottom: 6,
    color: "#2B1D1A",
  },
});
