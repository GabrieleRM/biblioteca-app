import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";

export default function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Intestazione */}
      <View style={styles.header}>
        <Text style={styles.biblioteca}>Biblioteca Calicantus</Text>
        <Text style={styles.indirizzo}>Via Duilio, 3 - Comiso (RG)</Text>
        <Text style={styles.link}>www................org / Fb....................</Text>
      </View>

      {/* Box "Cerca per..." */}
      <View style={styles.cercaBox}>
        <Text style={styles.cercaTitolo}>Cerca per…</Text>

        <View style={styles.rigaBottoni}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Dewey")}
          >
            <Text style={styles.btnTesto}>Classi di Dewey</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Generi")}
          >
            <Text style={styles.btnTesto}>Generi</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rigaBottoni}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTesto}>Autori</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTesto}>Titoli</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Immagine libro (esempio) */}
      <Image
        style={styles.copertina}
        source={{
          uri: "https://i.imgur.com/sO1t9jS.jpeg" // poi la cambiamo con la tua
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#ffffff",
  },
  header: {
    padding: 12,
    backgroundColor: "#d9e6f5",
    borderWidth: 1,
    borderColor: "#999",
    marginBottom: 16,
  },
  biblioteca: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  indirizzo: {
    textAlign: "center",
    marginTop: 4,
  },
  link: {
    textAlign: "center",
    marginTop: 4,
    fontSize: 12,
  },
  cercaBox: {
    backgroundColor: "#f7c99c",
    padding: 12,
    borderWidth: 1,
    borderColor: "#999",
    marginBottom: 16,
  },
  cercaTitolo: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  rigaBottoni: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  btn: {
    backgroundColor: "#e49b63",
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 6,
    flex: 1,
    marginHorizontal: 4,
  },
  btnTesto: {
    textAlign: "center",
    fontWeight: "600",
  },
  copertina: {
    marginTop: 12,
    width: "100%",
    height: 300,
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: "#999",
  },
});
