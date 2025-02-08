import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function BlogDetailScreen() {
  const route = useRoute();
  const { blog } = route.params;  // Retrieve the blog passed from the LiveNewsScreen

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blog.title}</Text>
      <Text style={styles.description}>{blog.description}</Text>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
});
