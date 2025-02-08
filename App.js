import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import GameScreen from "./src/screens/GameScreen";
import VoiceScreen from "./src/screens/VoiceScreen";
import LiveNewsScreen from "./src/screens/LiveNewsScreen";
import LevelScreen from "./src/screens/LevelScreen"; // Add this new screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="Voice" component={VoiceScreen} />
        <Stack.Screen name="LiveNews" component={LiveNewsScreen} />
        
        {/* Dynamically create 100 level screens */}
        {Array.from({ length: 100 }).map((_, index) => (
          <Stack.Screen
            key={`level-${index + 1}`}
            name={`Level${index + 1}`}
            component={LevelScreen}
            initialParams={{ level: index + 1 }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
