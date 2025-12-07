import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const GENERI_LISTA = [
  { codice: "01", nome: "Arte e Fotografia" },
  { codice: "02", nome: "Medicina" },
  { codice: "03", nome: "Scienze" },
  { codice: "04", nome: "Cinema-Tv-Spettacolo" },
  { codice: "05", nome: "Musica" },
  { codice: "06", nome: "Società-Politica-Comunicazione" },
  { codice: "07", nome: "Economia-Management" },
  { codice: "08", nome: "Diritto" },
  { codice: "09", nome: "Guide turistiche-Viaggi" },
  { codice: "10", nome: "Religioni (Orientali)" },
  { codice: "11", nome: "Religioni (Islam)" },
  { codice: "12", nome: "Storia delle religioni" },
];

export default function Generi({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* INTESTAZIONE */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Biblioteca Calicantus</Text>
        <Text style={styles.headerSubtitle}>Via Duilio, 3 Comiso -Rg</Text>
        <Text style={styles.headerSubtitle}>www.................org / Fb.................</Text>
      </View>

      {/* TITOLO */}
      <View style={styles.titleBox}>
        <Text style={styles.cercaPer}>Cerca per ......</Text>
        <Text style={styles.classeTitle}>Generi</Text>
      </View>

      {/* LISTA GENERI */}
      <View style={styles.listaBox}>
        {GENERI_LISTA.map((gen) => (
          <TouchableOpacity
            key={gen.codice}
            style={styles.riga}
            onPress={() =>
              navigation.navigate("Detail", {
                tipo: "genere",
                valore: `${gen.codice}-${gen.nome}`,
                nome: gen.nome,
              })
            }
          >
            <Text style={styles.genereText}>
              {gen.codice} — {gen.nome}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4EDE2", // pergamena
    padding: 20,
    paddingBottom: 40,
  },

  /* INTESTAZIONE */
  header: {
    backgroundColor: "#FBF7F0",
    borderWidth: 1,
    borderColor: "#E0D3C2",
    paddingVertical: 14,
    marginBottom: 20,
    borderRadius: 8,
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

  /* TITOLO */
  titleBox: {
    backgroundColor: "#FBF7F0",
    borderWidth: 0,
    borderColor: "#C9A66B",
    paddingVertical: 16,
    marginBottom: 16,
    borderRadius: 10,
  },
  cercaPer: {
    fontSize: 18,
    fontStyle: "italic",
    textAlign: "center",
    color: "#4A3C31",
  },
  classeTitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 6,
    color: "#2B1D1A",
  },

  /* LISTA GENERI */
  listaBox: {
    backgroundColor: "#FBF7F0",
    borderWidth: 0,
    borderColor: "#C9A66B",
    borderRadius: 10,
    padding: 12,
  },

  riga: {
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#E3D7C3",
  },

  genereText: {
    fontSize: 20,
    color: "#2B1D1A",
    fontWeight: "500",
  },
});
