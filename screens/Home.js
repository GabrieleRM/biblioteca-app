import { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView,
  Image
} from "react-native";

export default function Home({ navigation }) {
  const slide = useRef(new Animated.Value(-260)).current; 
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    const willOpen = !open;
    setOpen(willOpen);

    Animated.timing(slide, {
      toValue: willOpen ? 0 : -260,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>

      {/* BARRA SUPERIORE — HAMBURGER + TITOLO */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={toggleMenu} style={styles.burgerInHeader}>
          <Text style={styles.burgerIcon}>☰</Text>
        </TouchableOpacity>

        <Text style={styles.topBarTitle}>Biblioteca Calicantus</Text>
      </View>

      {/* INTESTAZIONE (SOLO SFONDO + TESTI INFORMATIVI) */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Biblioteca Calicantus</Text>
        <Text style={styles.headerSubtitle}>Via Duilio, 3 Comiso -Rg</Text>
        <Text style={styles.headerSubtitle}>www.............org / Fb.............</Text>
      </View>

      {/* BOX “Cerca per...” */}
      <View style={styles.searchBox}>
        <Text style={styles.searchTitle}>Cerca per ......</Text>

        <View style={styles.grid}>
          <HomeButton label="Classi di Dewey" onPress={() => navigation.navigate("Dewey")} />
          <HomeButton label="Generi" onPress={() => navigation.navigate("Generi")} />
          <HomeButton label="Autori" onPress={() => alert("In arrivo")} />
          <HomeButton label="Titoli" onPress={() => alert("In arrivo")} />
        </View>
      </View>

      {/* CATALOGO SCORREVOLE */}
      <ScrollView style={styles.catalogo}>
        <Image
          source={require("../assets/libro1.jpg")}
          style={styles.bookCover}
        />
      </ScrollView>

      {/* MENU LATERALE */}
      <Animated.View style={[styles.sidebar, { transform: [{ translateX: slide }] }]}>
        <ScrollView>

          {/* TASTO CHIUDI */}
          <TouchableOpacity onPress={toggleMenu} style={styles.closeBtn}>
            <Text style={styles.closeText}>✕ Chiudi</Text>
          </TouchableOpacity>

          <Text style={styles.menuTitle}>Menu</Text>

          <MenuItem label="Cerca per Classi Dewey" onPress={() => navigation.navigate("Dewey")} />
          <MenuItem label="Cerca per Generi" onPress={() => navigation.navigate("Generi")} />
          <MenuItem label="Cerca per Autore" onPress={() => alert("In arrivo")} />
          <MenuItem label="Cerca per Titolo" onPress={() => alert("In arrivo")} />
          <MenuItem label="Mostra foto" onPress={() => alert("In arrivo")} />
          <MenuItem label="Norme Prestito" onPress={() => alert("In arrivo")} />
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
  container: { flex: 1, backgroundColor: "#fff" },

  /* TOP BAR */
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  burgerInHeader: { marginRight: 15 },
  burgerIcon: { fontSize: 32 },
  topBarTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },

  /* MENU LATERALE */
  sidebar: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: 260,
    backgroundColor: "#f7e7ba",
    borderRightWidth: 1,
    borderColor: "#c9ac66",
    paddingTop: 80,
    paddingHorizontal: 15,
    zIndex: 999,
  },
  closeBtn: {
    marginBottom: 15,
    alignItems: "flex-end", 
  },
  closeText: { fontSize: 20, fontWeight: "bold" },
  menuTitle: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  menuItem: { paddingVertical: 10 },
  menuText: { fontSize: 18 },

  /* HEADER */
  header: {
    backgroundColor: "#d9e6f7",
    borderWidth: 1,
    borderColor: "#666",
    paddingVertical: 12,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  headerSubtitle: {
    textAlign: "center",
    fontSize: 13,
  },

  /* CERCA PER */
  searchBox: {
    backgroundColor: "#f6c19c",
    borderWidth: 1,
    borderColor: "#666",
    marginHorizontal: 20,
    paddingVertical: 15,
  },
  searchTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  homeButton: {
    backgroundColor: "#e6a97a",
    paddingVertical: 12,
    width: "48%",
    marginBottom: 12,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#a86b42",
  },
  homeButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  /* CATALOGO */
  catalogo: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  bookCover: {
    width: "100%",
    height: undefined,
    aspectRatio: 0.65,
    borderWidth: 1,
    borderColor: "#333",
  },
});
