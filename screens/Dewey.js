import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Dewey() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Classi di Dewey</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20
  }
});
