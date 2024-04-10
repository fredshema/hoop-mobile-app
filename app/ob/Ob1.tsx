import Sizes from "@/constants/Sizes";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
export default function Ob1() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/auth/page1.png")} />
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.bodyMessage}>Find a best possible way to park</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
  },
  bodyMessage: {
    color: "#2D2D2D",
    opacity: 0.5,
    fontSize: Sizes.md2x,
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

