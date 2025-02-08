import React from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Array of 5 blogs
const blogs = [
  { id: "1", title: "Blog 1", description: "This is the description of Blog 1." },
  { id: "2", title: "Blog 2", description: "This is the description of Blog 2." },
  { id: "3", title: "Blog 3", description: "This is the description of Blog 3." },
  { id: "4", title: "Blog 4", description: "This is the description of Blog 4." },
  { id: "5", title: "Blog 5", description: "This is the description of Blog 5." },
];

export default function LiveNewsScreen() {
  const navigation = useNavigation();

  // Render each blog item in the list
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.blogItem}
        onPress={() => navigation.navigate("BlogDetail", { blog: item })} 
      >
        <Text style={styles.blogTitle}>{item.title}</Text>
        <Text style={styles.blogDescription}>{item.description}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live News</Text>

      <FlatList
        data={blogs}  // List of blogs
        renderItem={renderItem}  // Render each blog
        keyExtractor={(item) => item.id}  // Unique key for each blog
        style={styles.blogList}
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  blogList: {
    width: "100%",
  },
  blogItem: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 3,
  },
  blogTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#007bff",
  },
  blogDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});
