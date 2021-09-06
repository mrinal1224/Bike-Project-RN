import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";
const BikeItem = () => {
  return (
    <View style={styles.bikeContainer}>
      <ImageBackground
        source={require("../../assets/images/bike.jpg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Yamaha</Text>
        <Text style={styles.subTitle}>Starting at Rs 400000</Text>
      </View>
      <StyledButton
        type="primary"
        content={"Custom Button"}
        onPress={() => {
          console.warn("custom button pressed");
        }}
      />

      <StyledButton
        type="secondary"
        content={"Custom Button"}
        onPress={() => {
          console.warn("Inventory button pressed");
        }}
      />
    </View>
  );
};

export default BikeItem;
