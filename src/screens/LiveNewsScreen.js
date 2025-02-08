import React from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Array of 5 blogs
const blogs = [
  {
    id: "1",
    title: "About Snake Bites",
    description: "Snake bites are dangerous and can be life-threatening, especially if the snake is venomous. If bitten, the victim should stay calm and avoid moving the affected area to reduce the spread of venom. It's essential to seek immediate medical help. While waiting for help, try to keep the affected limb immobilized and at or below the level of the heart. Do not try to suck out the venom, apply ice, or tourniquets. Time is critical, and the sooner medical assistance is received, the better the chances of survival.",
    imageUrl: require("../assets/blogs/snakebite.png"),  // Local image
  },
  {
    id: "2",
    title: "Pregnancy Care",
    description: "Pregnancy care is vital for the health of both the mother and the baby. Regular check-ups, a balanced diet, and staying active are essential components of prenatal care. Pregnant women should take prenatal vitamins, avoid harmful substances like alcohol or cigarettes, and get plenty of rest. Staying hydrated and managing stress are also key. Additionally, pregnant women should be aware of warning signs such as heavy bleeding, severe abdominal pain, or persistent headaches, which require immediate medical attention.",
    imageUrl: require("../assets/blogs/pregnancy.jpeg"),  // Local image
  },
  {
    id: "3",
    title: "Choking",
    description: "Choking occurs when an object blocks the airway, preventing air from entering the lungs. It can happen with food, toys, or other objects. If someone is choking, they may be unable to speak, breathe, or cough. The Heimlich maneuver is a first aid technique to help clear the airway. For infants, back slaps and chest thrusts are recommended. It's important to act quickly, as the lack of oxygen can lead to severe complications or death if not addressed immediately.",
    imageUrl: require("../assets/blogs/choking.jpg"),  // Local image
  },
  {
    id: "4",
    title: "Honey Bee Sting",
    description: "A honey bee sting occurs when a bee or wasp stings a person, releasing venom into the skin. Although honey bee stings are generally not life-threatening, they can cause significant pain, swelling, and an allergic reaction in some people. If stung, the first step is to remove the stinger by scraping it with a flat edge, such as a credit card. Then, clean the area with soap and water and apply a cold compress to reduce swelling. Over-the-counter antihistamines can help with itching, but if swelling or difficulty breathing occurs, seek medical attention immediately. People who have a known allergy to bee stings should always carry an epinephrine injection with them.",
    imageUrl: require("../assets/blogs/beesting.jpeg"),  // Local image
  },
  {
    id: "5",
    title: "Rashes",
    description: "Rashes are a common skin condition that can result from various causes, including allergies, infections, or environmental factors like heat or irritation. Common types of rashes include hives, eczema, and fungal infections. Symptoms may include redness, itching, swelling, or the appearance of blisters or bumps. It is important to identify the cause of the rash to determine the appropriate treatment. For example, using hypoallergenic products can help prevent allergic rashes, while antifungal creams may be used for fungal rashes. If the rash is accompanied by fever, severe pain, or spreading, it’s important to seek medical advice for further investigation.",
    imageUrl: require("../assets/blogs/rashes.jpeg"),  // Local image
  },
];

export default function LiveNewsScreen() {
  const navigation = useNavigation();

  // Render each blog item in the list
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.blogItem}
        onPress={() => navigation.navigate("BlogDetail", { blog: item })} // Navigate to BlogDetail screen
      >
        <Image source={item.imageUrl} style={styles.blogImage} />
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
  blogImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
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
