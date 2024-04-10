import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
export default function Ob1() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/auth/page1.png")}
        style={styles.images}
      />
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.bodyMessage}>Find a best possible way to park</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#EAEAF3",
  },
  bodyMessage: {
    color: "#2D2D2D",
    opacity: 0.5,
    fontSize: 16,
    textAlign: "center",
  },
  title: {
    color: "#2D2D2D",
    fontSize: 24,
    textAlign: "center",
    marginTop: 20,
  },
  images: {
    marginLeft: 50,
  },
});
