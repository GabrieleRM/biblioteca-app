import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function Detail({ route }) {
  const { codice, nome, tipo } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* INTESTAZIONE */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Biblioteca Calicantus</Text>
        <Text style={styles.headerSubtitle}>Via Duilio, 3 Comiso -Rg</Text>
        <Text style={styles.headerSubtitle}>
          www................org / Fb....................
        </Text>
      </View>

      {/* BOX CLASSI / GENERI */}
      <View style={styles.infoBox}>
        <View style={styles.riga}>
          <Text style={styles.label}>Classi di Dewey</Text>
          <Text style={styles.value}>{tipo === "dewey" ? codice : ""}</Text>
        </View>

        <View style={styles.riga}>
          <Text style={styles.label}>Generi</Text>
          <Text style={styles.value}>{tipo === "genere" ? `${codice} ${nome}` : ""}</Text>
        </View>
      </View>

      {/* MINI CATALOGO (FINTI LIBRI PER ORA) */}
      <View style={styles.catalogoBox}>
        <ScrollView horizontal>
          <Image
            source={{ uri: "https://i.imgur.com/GG7E7bE.jpeg" }}
            style={styles.cover}
          />
          <Image
            source={{ uri: "https://i.imgur.com/GG7E7bE.jpeg" }}
            style={styles.cover}
          />
        </ScrollView>
      </View>

      {/* ZONA DESCRIZIONE (VUOTA PER ORA) */}
      <View style={styles.descrizioneBox}>
        <Text style={styles.descrizioneText}>
          (Descrizione libro — la aggiungeremo più avanti)
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },

  /* HEADER */
  header: {
    backgroundColor: "#d9e6f7",
    borderWidth: 1,
    borderColor: "#666",
    paddingVertical: 12,
    marginBottom: 20,
  },
  headerTitle: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  headerSubtitle: {
    textAlign: "center",
    fontSize: 13,
  },

  /* BOX INFO */
  infoBox: {
    backgroundColor: "#f6c19c",
    borderWidth: 1,
    borderColor: "#666",
    padding: 12,
    marginBottom: 20,
  },
  riga: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
  },
  value: {
    fontSize: 20,
  },

  /* MINI CATALOGO */
  catalogoBox: {
    borderWidth: 1,
    borderColor: "#666",
    padding: 12,
    backgroundColor: "#fafafa",
    marginBottom: 20,
  },
  cover: {
    width: 140,
    height: 200,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#444",
  },

  /* DESCRIZIONE LIBRO (VUOTA) */
  descrizioneBox: {
    borderWidth: 1,
    borderColor: "#666",
    padding: 12,
    minHeight: 120,
  },
  descrizioneText: {
    fontSize: 16,
    color: "gray",
  },
});
