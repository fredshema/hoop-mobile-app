import { Text } from "@/components/Themed";
import { PasswordInput, PhoneInput, TextInput } from "@/components/ThemedInput";
import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, Pressable, StyleSheet, View } from "react-native";

export default function Login() {
  const bgImage = require("../../assets/auth/pattern.png");
  const [loginMethod, setLoginMethod] = React.useState("email");
  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      <View style={styles.header}>
        <ImageBackground source={bgImage} style={styles.bg}>
          <Text style={styles.title}>Glad to see you!!</Text>
        </ImageBackground>
      </View>
      <View style={styles.form}>
        <View style={{ flex: 1 }}>
          {loginMethod === "email" ? <LoginWithEmail /> : <LoginWithPhone />}
          <Text style={{ textAlign: "right" }}>
            Forgot password?{" "}
            <Link style={styles.primaryText} href="/(auth)/forgot-password/form">
              Retrieve
            </Link>
          </Text>
        </View>
        <View style={styles.footer}>
          <Pressable style={styles.button}>
            <Text style={styles.btnText}>Login</Text>
          </Pressable>
          <Text>
            Don't have an account?{" "}
            <Link href="/(auth)/register" style={styles.primaryText}>
              Sign Up
            </Link>
          </Text>
        </View>
      </View>
    </View>
  );
}

function LoginWithEmail() {
  return (
    <View>
      <TextInput placeholder="Email" inputMode="email" />
      <PasswordInput placeholder="Password" returnKeyType="done" />
    </View>
  );
}
function LoginWithPhone() {
  return (
    <View>
      <PhoneInput placeholder="Phone number" />
      <PasswordInput placeholder="Password" returnKeyType="done" />
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
