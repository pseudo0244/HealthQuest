import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function LevelScreen({ route, navigation }) {
  const { level } = route.params;

  // Define the content for each level
  const levelContent = {
    1: {
      title: "Level 1: The Beginning",
      description: "This is the first level. Get ready to start your journey!",
      color: "#FF5733",
    },
    2: {
      title: "Level 2: Getting Tough",
      description: "This level will test your skills. Stay sharp!",
      color: "#33FF57",
    },
    3: {
      title: "Level 3: Advanced Challenges",
      description: "You've come far, now face some tougher challenges!",
      color: "#3357FF",
    },
    // Add more levels here
    4: {
      title: "Level 4: Mastery",
      description: "Congratulations on reaching this level. Time to show what you've learned!",
      color: "#FF33A1",
    },
    // Add up to 100 or as many levels as needed
  };

  // Fallback content if the level does not exist in the data
  const levelData = levelContent[level] || {
    title: `Level ${level}`,
    description: "This is a default level. Customize it as needed.",
    color: "#000",
  };

  return (
    <View style={[styles.container, { backgroundColor: levelData.color }]}>
      <Text style={styles.title}>{levelData.title}</Text>
      <Text style={styles.description}>{levelData.description}</Text>

      <Button
        title="Go to Next Level"
        onPress={() => {
          const nextLevel = level + 1;
          if (levelContent[nextLevel]) {
            navigation.navigate("LevelScreen", { level: nextLevel });
          } else {
            navigation.navigate("Game"); // Go back to the game or home if no more levels exist
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginVertical: 20,
  },
});
