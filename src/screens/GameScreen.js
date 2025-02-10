import { View, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function GameScreen() {
  const navigation = useNavigation();

  // Create an array of 100 levels
  const levels = Array.from({ length: 10 }, (_, index) => index + 1);

  const renderItem = ({ item }) => {
    const animatedValue = new Animated.Value(0);

    const animateButton = () => {
      Animated.sequence([
        Animated.timing(animatedValue, { toValue: 1, duration: 200, useNativeDriver: true }),
        Animated.timing(animatedValue, { toValue: 0, duration: 200, useNativeDriver: true }),
      ]).start();
    };

    return (
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          animateButton();
          setTimeout(() => navigation.navigate(`Level${item}`), 200);
        }}
      >
        <Animated.View
          style={[
            styles.button,
            {
              transform: [
                {
                  scale: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0.95],
                  }),
                },
              ],
            },
          ]}
        >
          <LinearGradient colors={["#6a82fb", "#fc5c7d"]} style={styles.gradient}>
            <Text style={styles.buttonText}>{item}</Text>
          </LinearGradient>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  const numColumns = 2; // Define the number of columns per row

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#89CFF0", "#A3D8F4"]} style={styles.background}>
        <Text style={styles.title}>Choose a Level</Text>

        <FlatList
          data={levels}
          renderItem={renderItem}
          keyExtractor={(item) => item.toString()}
          numColumns={numColumns}
          contentContainerStyle={styles.flatListContainer}
          columnWrapperStyle={styles.columnWrapper}
        />
      </LinearGradient>
    </View>
  );
}

const { width } = Dimensions.get("window");
const buttonSize = (width - 60) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 20,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  buttonContainer: {
    margin: 10,
  },
  button: {
    width: buttonSize,
    height: buttonSize,
    borderRadius: 25,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  flatListContainer: {
    alignItems: "center",
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
});
