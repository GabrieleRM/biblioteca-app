import { View, Text, StyleSheet } from "react-native";

export default function Generi() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pagina Generi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
