import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { usePoints } from "../context/PointsContext"; // Import usePoints

export default function MCQScreen({ route, navigation }) {
  const { level, questions } = route.params; // Receive level and questions from the LevelScreen
  const { incrementPoints } = usePoints(); // Access incrementPoints function from context

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
      incrementPoints(10); // Add 10 points for a correct answer
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      Alert.alert("Quiz Complete", `Your score: ${score} / ${questions.length}`);
      navigation.navigate("Home"); // You can also navigate to the next level or screen
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{questions[currentQuestionIndex].question}</Text>
      <View style={styles.options}>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            onPress={() => handleAnswer(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  options: {
    width: "100%",
    alignItems: "center",
  },
  optionButton: {
    backgroundColor: "#007bff",
    padding: 15,
    margin: 10,
    width: "80%",
    borderRadius: 10,
    alignItems: "center",
  },
  optionText: {
    color: "white",
    fontSize: 18,
  },
});
