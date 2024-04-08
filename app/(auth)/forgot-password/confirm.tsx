import { Link, Text } from "@/components/Themed";
import { PrimaryButton } from "@/components/ThemedButton";
import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import { router } from "expo-router";
import { Image, StyleSheet, View } from "react-native";

export default function ConfirmForgotPassword() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          source={require("../../../assets/auth/confirm-forget-password.png")}
        />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>Check your Email</Text>
          <Text style={styles.subtitle}>
            We have sent password recovery instructions to your email.
          </Text>
          <PrimaryButton
            label="Open email app"
            style={{ marginBottom: Sizes.md, width: "60%" }}
            onPress={() => {
                router.push("/(auth)/forgot-password/otp");
            }}
          />
          <Text style={{ fontSize: Sizes.md, color: Colors.light.muted }}>
            Skip I'll confim later
          </Text>
        </View>
      </View>
      <Text style={styles.footer}>
        Didn't receive the email? Check your spam filter or{" "}
        <Link href="/(auth)/forgot-password/form">
          try another email address
        </Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: Sizes.xl,
    fontWeight: "500",
    marginTop: Sizes.md3x,
  },
  subtitle: {
    fontSize: Sizes.md2x,
    textAlign: "center",
    marginTop: Sizes.sm,
    marginBottom: Sizes.xl2x,
    color: Colors.light.muted,
    maxWidth: "80%",
  },
  footer: {
    textAlign: "center",
    maxWidth: "80%",
    color: Colors.light.muted,
  },
});
