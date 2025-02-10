import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { usePoints } from "../context/PointsContext"; // Import usePoints

export default function HomeScreen() {
  const navigation = useNavigation();
  const { points } = usePoints(); // Get points from context

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to HealthQuest</Text>

      {/* Display total points */}
      <Text style={styles.points}>Total Points: {points}</Text>

      <View style={styles.buttonContainer}>
        {/* Profile Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Profile")}>
          <Ionicons name="person-circle-outline" size={40} color="white" />
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>

        {/* Game Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Game")}>
          <Ionicons name="game-controller-outline" size={40} color="white" />
          <Text style={styles.buttonText}>Game</Text>
        </TouchableOpacity>

        {/* Voice Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Voice")}>
          <Ionicons name="mic-outline" size={40} color="white" />
          <Text style={styles.buttonText}>Voice</Text>
        </TouchableOpacity>

        {/* Live News Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("LiveNews")}>
          <Ionicons name="newspaper-outline" size={40} color="white" />
          <Text style={styles.buttonText}>General</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e3f2fd",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#007bff",
  },
  points: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#007bff",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
    width: 120,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    marginTop: 5,
  },
});
