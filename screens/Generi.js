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
      
      {/* Intestazione */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Biblioteca Calicantus</Text>
        <Text style={styles.headerSubtitle}>Via Duilio, 3 Comiso -Rg</Text>
        <Text style={styles.headerSubtitle}>
          www................org / Fb....................
        </Text>
      </View>

      {/* Box "Cerca per... Generi" */}
      <View style={styles.titleBox}>
        <Text style={styles.cercaPer}>Cerca per ......</Text>
        <Text style={styles.classeTitle}>Generi</Text>
      </View>

      {/* Lista Generi */}
      <View style={styles.listaBox}>
        {GENERI_LISTA.map((gen) => (
          <TouchableOpacity
            key={gen.codice}
            style={styles.riga}
            onPress={() =>
              navigation.navigate("Detail", {
                codice: gen.codice,
                nome: gen.nome,
                tipo: "genere"
              })
            }
          >
            <Text style={styles.genereText}>
              {gen.codice}-{gen.nome}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },

  header: {
    backgroundColor: "#d9e6f7",
    borderWidth: 1,
    borderColor: "#666",
    paddingVertical: 12,
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

  titleBox: {
    backgroundColor: "#f6c19c",
    borderWidth: 1,
    borderColor: "#666",
    paddingVertical: 12,
    marginBottom: 12,
  },
  cercaPer: {
    fontSize: 18,
    fontStyle: "italic",
    textAlign: "center",
  },
  classeTitle: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 4,
  },

  listaBox: {
    backgroundColor: "#f6c19c",
    borderWidth: 1,
    borderColor: "#666",
    padding: 16,
  },

  riga: {
    paddingVertical: 8,
  },

  genereText: {
    fontSize: 20,
  },
});
