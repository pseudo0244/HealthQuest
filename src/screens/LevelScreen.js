import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function LevelScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { level } = route.params;

  // Function to navigate to the MCQ page with level-specific questions
  const attemptMCQ = () => {
    // Define the set of MCQs for each level
    const levelQuestions = {
      1: [
        { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correctAnswer: "4" },
        { question: "What color is the sky?", options: ["Red", "Blue", "Green", "Yellow"], correctAnswer: "Blue" },
      ],
      2: [
        { question: "What is 3 + 3?", options: ["5", "6", "7", "8"], correctAnswer: "6" },
        { question: "Which planet is closest to the Sun?", options: ["Earth", "Mars", "Venus", "Mercury"], correctAnswer: "Mercury" },
      ],
      3: [
        { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], correctAnswer: "Paris" },
        { question: "Which gas do plants absorb?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correctAnswer: "Carbon Dioxide" },
      ],
      // Add more levels and their questions as needed
    };

    // Get the questions for the current level
    const questions = levelQuestions[level] || [];

    // Navigate to the MCQ page with the questions for the current level
    navigation.navigate("MCQ", { level, questions });
  };

  // Dynamic content based on level
  const levelContent = {
    1: {
      title: "Welcome to Level 1!",
      description: "This is the introductory level where you'll learn the basics.",
      additionalInfo: "Level 1 is all about getting comfortable with the app.",
    },
    2: {
      title: "Level 2 - Challenge Begins!",
      description: "In this level, you'll be tested on your understanding of the basics.",
      additionalInfo: "Get ready to take it up a notch!",
    },
    100: {
      title: "Congratulations, You've Completed All Levels!",
      description: "What an achievement! You've completed all levels.",
      additionalInfo: "Stay tuned for more levels!",
    },
    // Add more levels as needed
  };

  const levelData = levelContent[level] || {
    title: "Level Content",
    description: "Content for this level will be added soon.",
    additionalInfo: "Stay tuned for more information!",
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text style={styles.title}>{levelData.title}</Text>
          <Text style={styles.description}>{levelData.description}</Text>
          <Text style={styles.additionalInfo}>{levelData.additionalInfo}</Text>

          {/* Attempt MCQ Button */}
          <TouchableOpacity style={styles.button} onPress={attemptMCQ}>
            <Text style={styles.buttonText}>Attempt MCQ</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#eaf4fc", // Light blue background
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  scrollView: {
    alignItems: "center",
    paddingVertical: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#007bff", // Blue color for the title
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    color: "#0066cc", // Darker blue for description
    marginBottom: 20,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  additionalInfo: {
    fontSize: 16,
    color: "#3388cc", // Medium blue for additional information
    marginBottom: 30,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#0056b3", // Dark blue for button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
