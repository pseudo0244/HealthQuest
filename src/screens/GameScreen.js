import { View, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions, Animated } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"

export default function GameScreen() {
  const navigation = useNavigation()

  // Create an array of 100 levels
  const levels = Array.from({ length: 100 }, (_, index) => index + 1)

  const renderItem = ({ item }) => {
    const animatedValue = new Animated.Value(0)

    const animateButton = () => {
      Animated.sequence([
        Animated.timing(animatedValue, { toValue: 1, duration: 200, useNativeDriver: true }),
        Animated.timing(animatedValue, { toValue: 0, duration: 200, useNativeDriver: true }),
      ]).start()
    }

    return (
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          animateButton()
          setTimeout(() => navigation.navigate(`Level${item}`), 200)
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
                    outputRange: [1, 0.9],
                  }),
                },
              ],
            },
          ]}
        >
          <LinearGradient colors={["#FF9A8B", "#FF6A88", "#FF99AC"]} style={styles.gradient}>
            <Text style={styles.buttonText}>{item}</Text>
          </LinearGradient>
        </Animated.View>
      </TouchableOpacity>
    )
  }

  const numColumns = 2 // Define the number of columns per row

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#8EC5FC", "#E0C3FC"]} style={styles.background}>
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
  )
}

const { width } = Dimensions.get("window")
const buttonSize = (width - 60) / 2

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
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  buttonContainer: {
    margin: 10,
  },
  button: {
    width: buttonSize,
    height: buttonSize,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
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
})

