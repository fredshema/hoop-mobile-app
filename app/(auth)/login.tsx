import { Link, Text } from "@/components/Themed";
import { PrimaryButton } from "@/components/ThemedButton";
import { PasswordInput, PhoneInput, TextInput } from "@/components/ThemedInput";
import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import {router} from "expo-router";

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
          <Text style={{ textAlign: "right", color: Colors.light.muted }}>
            Forgot password?{" "}
            <Link
              href="/(auth)/forgot-password/form"
            >
              Retrieve
            </Link>
          </Text>
        </View>
        <View style={styles.footer}>
          <PrimaryButton label="Login" onPress={
            () => {
              router.navigate("/home/");
            }
          } />
          <Text style={{ color: Colors.light.muted }}>
            Don't have an account?{" "}
            <Link href="/(auth)/register">
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
