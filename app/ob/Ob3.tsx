import Sizes from "@/constants/Sizes";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text } from "@/components/Themed";


export default function Ob3() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/auth/page3.png")} />
      <Text style={styles.title}>Find Parking</Text>
      <Text style={styles.bodyMessage}>
        Find your perfect parking space wherever and whenever you need
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
  },
  bodyMessage: {
    opacity: 0.5,
    textAlign: "center",
    maxWidth: 300,
  },
  title: {
    color: "#2D2D2D",
    fontSize: Sizes.xl,
    textAlign: "center",
    marginTop: Sizes.lg,
    marginBottom: Sizes.sm,
  },
});
