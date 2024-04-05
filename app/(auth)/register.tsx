import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import { Link } from "expo-router";
import React from "react";
import {
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function Register() {
  const bgImage = require("../../assets/auth/pattern.png");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground source={bgImage} style={styles.bg}>
          <Text style={styles.title}>Let's Start!!</Text>
        </ImageBackground>
      </View>
      <View style={styles.form}>
        <View style={{ flex: 1 }}>
          <View>
            <TextInput placeholder="Email" style={styles.input} />
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.input}
            />
            <TextInput placeholder="Password Authentication" style={styles.input} />
            <TextInput placeholder="Phone number" style={styles.input} />
          </View>
        </View>
        <View style={styles.footer}>
          <Pressable style={styles.button}>
            <Text style={styles.btnText}>Register</Text>
          </Pressable>
          <Text style={styles.text}>
            Have an account?{" "}
            <Link
              href="/(auth)/login"
              style={{ ...styles.text, ...styles.primaryText }}
            >
              Sign In
            </Link>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.dark.background,
  },
  header: {
    flex: 2,
    width: "100%",
  },
  bg: {
    flex: 1,
    width: "100%",
    padding: Sizes.lg,
    resizeMode: "repeat",
    justifyContent: "center",
  },
  title: {
    color: Colors.dark.text,
    fontSize: Sizes.xl,
  },
  text: {
    fontSize: Sizes.md2x,
    color: Colors.light.text,
  },
  primaryText: {
    color: Colors.light.primary,
  },
  button: {
    width: "100%",
    backgroundColor: Colors.dark.background,
    paddingVertical: Sizes.md,
    borderRadius: Sizes.md,
    marginBottom: Sizes.lg,
  },
  btnText: {
    textAlign: "center",
    color: Colors.dark.text,
    fontSize: Sizes.lg,
  },
  form: {
    flex: 5,
    width: "100%",
    position: "relative",
    backgroundColor: Colors.light.background,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    paddingVertical: Sizes.sm + 40,
    paddingHorizontal: Sizes.lg,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    paddingHorizontal: Sizes.lg,
    paddingVertical: Sizes.md3x,
    fontSize: Sizes.md3x,
    marginBottom: Sizes.md3x,
    borderRadius: Sizes.md,
    backgroundColor: Colors.white,
    color: Colors.light.text,
    fontWeight: "400"
  },
});
