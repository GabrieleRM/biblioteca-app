import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity 
} from "react-native";

const CLASSI_DEWEY = [
  { codice: "000", nome: "Opere generali" },
  { codice: "100", nome: "Filosofia" },
  { codice: "200", nome: "Religione" },
  { codice: "300", nome: "Scienze sociali / Sociologia" },
  { codice: "400", nome: "Filologia" },
  { codice: "500", nome: "Scienza pura" },
  { codice: "600", nome: "Scienze applicate / Arti utili" },
  { codice: "700", nome: "Belle Arti" },
  { codice: "800", nome: "Letteratura" },
  { codice: "900", nome: "Storia" },
];

export default function Dewey({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* ░░ INTESTAZIONE ░░ */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Biblioteca Calicantus</Text>
        <Text style={styles.headerSubtitle}>Via Duilio, 3 Comiso -Rg</Text>
        <Text style={styles.headerSubtitle}>
          www.................org / Fb...................
        </Text>
      </View>

      {/* ░░ BOX CERCA PER ░░ */}
      <View style={styles.titleBox}>
        <Text style={styles.cercaPer}>Cerca per ......</Text>
        <Text style={styles.classeTitle}>Classi di Dewey</Text>
      </View>

      {/* ░░ LISTA DEWEY ░░ */}
      <View style={styles.listaBox}>
        {CLASSI_DEWEY.map((item) => (
          <View key={item.codice} style={styles.riga}>

            {/* Nome classe (sinistra) */}
            <Text style={styles.nome}>{item.nome}</Text>

            {/* Codice cliccabile (destra) */}
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Detail", {
                  tipo: "dewey",
                  valore: item.codice,
                  nome: item.nome
                })
              }
            >
              <Text style={styles.codice}>{item.codice}</Text>
            </TouchableOpacity>

          </View>
        ))}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F4EDE1", // pergamena
  },

  /* ░░ HEADER ░░ */
  header: {
    backgroundColor: "#FBF7F0",
    borderWidth: 1,
    borderColor: "#E0D3C2",
    paddingVertical: 16,
    marginHorizontal: 5,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 14,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2B1D1A",
  },
  headerSubtitle: {
    textAlign: "center",
    fontSize: 14,
    color: "#4A3C31",
  },

  /* ░░ CERCA PER ░░ */
  titleBox: {
    backgroundColor: "#FBF7F0",
    borderWidth: 0,
    borderColor: "#E0D3C2",
    paddingVertical: 20,
    borderRadius: 14,
    marginBottom: 20,
  },
  cercaPer: {
    fontSize: 18,
    fontStyle: "italic",
    textAlign: "center",
    color: "#4A3C31",
  },
  classeTitle: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 4,
    color: "#2B1D1A",
  },

  /* ░░ LISTA DEWEY ░░ */
  listaBox: {
    backgroundColor: "#FBF7F0",
    borderWidth: 0,
    borderColor: "#E0D3C2",
    padding: 16,
    borderRadius: 14,
  },

  riga: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EDE2D3",
  },

  nome: {
    fontSize: 18,
    color: "#2B1D1A",
    flex: 1,
  },

  codice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4A3F2B",
  },
});

