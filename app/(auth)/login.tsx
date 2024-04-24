import { Link, Text } from "@/components/Themed";
import { PrimaryButton } from "@/components/ThemedButton";
import { PasswordInput, PhoneInput, TextInput } from "@/components/ThemedInput";
import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import client  from "../../Utils/AppwriteClient";
import {useGlobalSearchParams} from "expo-router";
import { Account } from "react-native-appwrite/src";

export default function Login() {
  const bgImage = require("../../assets/auth/pattern.png");
  const { type } = useGlobalSearchParams<{ type: string }>();
  const [loginMethod, setLoginMethod] = React.useState(type);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    if (loginMethod === "email") {
      if (email === "" || password === "") {
        alert("Please fill in all the fields");
      } else {
        logInWithEmail();
      }
    } else {
      if (phone === "" || password === "") {
        alert("Please fill in all the fields");
      } else {
        logInWithPhone();
      }
    }
  };

  const account = new Account(client);

  const logInWithEmail = async () => {
    try {
      await account.createEmailSession(email, password);
      alert("welcome "+ email);
      router.navigate("/home/");
    } catch (err) {
      alert("invalid email or password");
    }
  };

  const logInWithPhone = async () => {
    try {
      await account.createPhoneSession(phone, password);
      router.navigate("/home/");
    } catch (err) {
      alert("Phone number or password is incorrect");
    }
  };

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
          {loginMethod === "email" ? (
            <LoginWithEmail setEmail={setEmail} setPassword={setPassword} />
          ) : (
            <LoginWithPhone setPhone={setPhone} setPassword={setPassword} />
          )}
          <Text style={{ textAlign: "right", color: Colors.light.muted }}>
            Forgot password?{" "}
            <Link href="/(auth)/forgot-password/form">Retrieve</Link>
          </Text>
        </View>
        <View style={styles.footer}>
          <PrimaryButton label="Login" onPress={handleSubmit} />
          <Text style={{ color: Colors.light.muted }}>
            Don't have an account? <Link href="/(auth)/register">Sign Up</Link>
          </Text>
        </View>
      </View>
    </View>
  );
}

interface LoginWithEmailProps {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}
function LoginWithEmail({ setEmail, setPassword }: LoginWithEmailProps) {
  return (
    <View>
      <TextInput
        placeholder="Email"
        inputMode="email"
        onChangeText={(text) => setEmail(text)}
      />
      <PasswordInput
        placeholder="Password"
        returnKeyType="done"
        onChangeText={(text) => setPassword(text)}
      />
    </View>
  );
}

interface LoginWithPhoneProps {
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}
function LoginWithPhone({ setPhone, setPassword }: LoginWithPhoneProps) {
  return (
    <View>
      <PhoneInput
        placeholder="Phone number"
        onChangeText={(text) => setPhone(text)}
      />
      <PasswordInput
        placeholder="Password"
        returnKeyType="done"
        onChangeText={(text) => setPassword(text)}
      />
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
    flexDirection: "column",
  },
});
