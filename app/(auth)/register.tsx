import { Text } from "@/components/Themed";
import { PasswordInput, PhoneInput, TextInput } from "@/components/ThemedInput";
import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, Pressable, StyleSheet, View } from "react-native";

export default function Register() {
  const bgImage = require("../../assets/auth/pattern.png");
  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      <View style={styles.header}>
        <ImageBackground source={bgImage} style={styles.bg}>
          <Text style={styles.title}>Let's Start!!</Text>
        </ImageBackground>
      </View>
      <View style={styles.form}>
        <View style={{ flex: 1 }}>
          <View>
            <TextInput placeholder="Email" inputMode="email" />
            <PasswordInput placeholder="Password" secureTextEntry />
            <PasswordInput placeholder="Password Authentication" />
            <PhoneInput placeholder="Phone number" returnKeyType="done" />
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
    padding: Sizes.lg,
    resizeMode: "cover",
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
});
