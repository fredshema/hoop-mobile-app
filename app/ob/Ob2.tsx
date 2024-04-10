import Sizes from "@/constants/Sizes";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text } from "@/components/Themed";


export default function Ob2() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/auth/page2.png")} />
      <Text style={styles.title}>Hollaaa</Text>
      <Text style={styles.bodyMessage}>
        Find the best possible parking space nearby your desired destination
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
