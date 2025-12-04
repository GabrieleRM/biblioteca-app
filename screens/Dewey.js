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

      {/* Intestazione */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Biblioteca Calicantus</Text>
        <Text style={styles.headerSubtitle}>Via Duilio, 3 Comiso -Rg</Text>
        <Text style={styles.headerSubtitle}>
          www................org / Fb....................
        </Text>
      </View>

      {/* Box "Cerca per... Classi di Dewey" */}
      <View style={styles.titleBox}>
        <Text style={styles.cercaPer}>Cerca per ......</Text>
        <Text style={styles.classeTitle}>Classi di Dewey</Text>
      </View>

      {/* Lista Classi */}
      <View style={styles.listaBox}>
        {CLASSI_DEWEY.map((item) => (
          <View key={item.codice} style={styles.riga}>

            {/* Nome NON cliccabile */}
            <Text style={styles.nome}>{item.nome}</Text>

            {/* SOLO numero cliccabile */}
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Detail", {
                  tipo: "dewey",
                  valore: item.codice,   // ✅ fondamentale
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
    marginBottom: 4,
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    paddingVertical: 8,
  },

  nome: {
    fontSize: 20,
  },

  codice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#003366"
  },
});

