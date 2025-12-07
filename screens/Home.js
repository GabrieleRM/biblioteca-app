import { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView,
  Image,
} from "react-native";

import { getBooks } from "../src/services/getBooks";

export default function Home({ navigation }) {
  const slide = useRef(new Animated.Value(-300)).current; // menu completamente fuori
  const [open, setOpen] = useState(false);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  const toggleMenu = () => {
    const willOpen = !open;
    setOpen(willOpen);

    Animated.timing(slide, {
      toValue: willOpen ? 0 : -300, // stessa ampiezza della sidebar
      duration: 260,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* TOP BAR */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={toggleMenu} style={styles.burgerInHeader}>
          <Text style={styles.burgerIcon}>☰</Text>
        </TouchableOpacity>

        <Text style={styles.topBarTitle}>Biblioteca Calicantus</Text>
      </View>

      {/* HEADER (CARTA CON BORDO) */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Biblioteca Calicantus</Text>
        <Text style={styles.headerSubtitle}>Via Duilio, 3 Comiso -Rg</Text>
        <Text style={styles.headerSubtitle}>
          www.............org / Fb.............
        </Text>
      </View>

      {/* BOX “CERCA PER…” */}
      <View style={styles.searchBox}>
        <Text style={styles.searchTitle}>Cerca per ......</Text>

        <View style={styles.grid}>
          <HomeButton
            label="Classi di Dewey"
            onPress={() => navigation.navigate("Dewey")}
          />
          <HomeButton
            label="Generi"
            onPress={() => navigation.navigate("Generi")}
          />
          <HomeButton label="Autori" onPress={() => alert("In arrivo")} />
          <HomeButton label="Titoli" onPress={() => alert("In arrivo")} />
        </View>
      </View>

      {/* CATALOGO LIBRI (VERTICALE) */}
      <ScrollView style={styles.catalogo}>
        {books.map((book) => (
          <View key={book.id} style={{ marginBottom: 25 }}>
            <Image
              source={{
                uri:
                  book.images?.[0] ||
                  "https://via.placeholder.com/600x900.png?text=Nessuna+Immagine",
              }}
              style={styles.bookCover}
            />

            <Text style={styles.bookTitle}>{book.titolo}</Text>
            <Text style={styles.bookSubtitle}>
              {book.autore_nome} {book.autore_cognome}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* MENU LATERALE */}
      <Animated.View
        style={[styles.sidebar, { transform: [{ translateX: slide }] }]}
      >
        <ScrollView>
          <TouchableOpacity onPress={toggleMenu} style={styles.closeBtn}>
            <Text style={styles.closeText}>✕ Chiudi</Text>
          </TouchableOpacity>

          <Text style={styles.menuTitle}>Menu</Text>

          <MenuItem
            label="Cerca per Classi Dewey"
            onPress={() => navigation.navigate("Dewey")}
          />
          <MenuItem
            label="Cerca per Generi"
            onPress={() => navigation.navigate("Generi")}
          />
          <MenuItem
            label="Cerca per Autore"
            onPress={() => alert("In arrivo")}
          />
          <MenuItem
            label="Cerca per Titolo"
            onPress={() => alert("In arrivo")}
          />
          <MenuItem
            label="Mostra foto"
            onPress={() => alert("In arrivo")}
          />
          <MenuItem
            label="Norme Prestito"
            onPress={() => alert("In arrivo")}
          />
          <MenuItem label="Contatti" onPress={() => alert("In arrivo")} />
        </ScrollView>
      </Animated.View>
    </View>
  );
}

function HomeButton({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.homeButton} onPress={onPress}>
      <Text style={styles.homeButtonText}>{label}</Text>
    </TouchableOpacity>
  );
}

function MenuItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.menuItem}>
      <Text style={styles.menuText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4EDE2" },

  /* TOP BAR */
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "#FBF7F0",
  },
  burgerInHeader: { marginRight: 15 },
  burgerIcon: { fontSize: 32, color: "#2B1D1A" },
  topBarTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2B1D1A",
  },

  /* HEADER CARD — con bordo sottile e margine dall’alto */
  header: {
    backgroundColor: "#FBF7F0",
    borderWidth: 1,
    borderColor: "#E0D3C2",
    paddingVertical: 18,
    marginHorizontal: 20,
    marginTop: 15, // 👈 distacco dalla top bar
    marginBottom: 20,
    borderRadius: 12,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    color: "#2B1D1A",
  },
  headerSubtitle: {
    textAlign: "center",
    fontSize: 14,
    color: "#4A3C31",
  },

  /* BOX CERCA PER — con bordo e pulsanti centrali come prima */
  searchBox: {
    backgroundColor: "#FBF7F0",
    borderWidth: 0,
    borderColor: "#C9A66B",
    marginHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  searchTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#2B1D1A",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  homeButton: {
    backgroundColor: "#F4EDE2",
    paddingVertical: 12,
    width: "48%",
    marginBottom: 12,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 0.5,          // 👈 bordo ripristinato
    borderColor: "#C9A66B",  // 👈 colore caldo
  },
  homeButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4A3C31",
  },

  /* CATALOGO LIBRI */
  catalogo: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  bookCover: {
    width: "100%",
    height: undefined,
    aspectRatio: 0.65,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C9A66B",
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: "#2B1D1A",
  },
  bookSubtitle: {
    fontSize: 14,
    color: "#6A5E55",
  },

  /* SIDEBAR — migliorata ma senza “striscia” quando è chiusa */
  sidebar: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: 300,
    backgroundColor: "#FBF7F0",
    paddingTop: 60,
    paddingHorizontal: 20,
    elevation: 6,
  },
  closeBtn: {
    marginBottom: 20,
    alignItems: "flex-end",
  },
  closeText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#A67C52",
  },
  menuTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2B1D1A",
  },
  menuItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#E3D7C3",
  },
  menuText: {
    fontSize: 18,
    color: "#4A3C31",
  },
});
