import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DiceOne from "./assets/One.png";
import DiceTwo from "./assets/Two.png";
import DiceThree from "./assets/Three.png";
import DiceFour from "./assets/Four.png";
import DiceFive from "./assets/Five.png";
import DiceSix from "./assets/Six.png";
export default function App() {
  const [dice, setDice] = useState(DiceOne);
  const randomDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDice(DiceOne);
        break;
      case 2:
        setDice(DiceTwo);
        break;
      case 3:
        setDice(DiceThree);
        break;
      case 4:
        setDice(DiceFour);
        break;
      case 5:
        setDice(DiceFive);
        break;
      case 6:
        setDice(DiceSix);
        break;
      default:
        setDice(DiceOne);
        break;
    }
  };
  return (
    <View style={styles.mainView}>
      <Image source={dice} style={styles.dice} />
      <Text onPress={randomDice} style={styles.mainText}>
        Roll Dice
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#DFCCFB",
    alignItems: "center",
    justifyContent: "center",
  },
  dice: {
    width: 200,
    height: 200,
  },
  mainText: {
    fontSize: 30,
    color: "#f2a365",
    marginTop: 30,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: "#30475e",
    borderWidth: 3,
    borderRadius: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
    shadowColor: "#30475e",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});
