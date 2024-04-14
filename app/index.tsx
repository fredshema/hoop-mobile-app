import { Icon } from "@/components/Icon";
import { Link, Text } from "@/components/Themed";
import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import { router } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ob1 from "./ob/Ob1";

export default function RootHome() {
  const insets = useSafeAreaInsets();

  const handleLogin = (type: string) => {
    router.push("/login");
    router.setParams({ type });
  };

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <Link href="/parking/tracking" style={styles.skipText}>
        Skip
      </Link>
      <View style={styles.ob}>
        <Ob1 />
        <View style={styles.circles}>
          <View style={[styles.circle, styles.activeCircle]}></View>
          <View style={styles.circle}></View>
          <View style={styles.circle}></View>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.btnEmail}
          onPress={() => {
            handleLogin("email");
          }}
        >
          <Icon name="message" />
          <Text style={styles.textEmail}>Login with Email</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnPhone}
          onPress={() => {
            handleLogin("phone");
          }}
        >
          <Icon name="call" />
          <Text style={styles.textPhone}>Login with Phone</Text>
        </TouchableOpacity>
        <View style={styles.messageLink}>
          <Text style={styles.message}>Don't have an account? </Text>
          <Link href="/home/">Sign Up</Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Sizes.lg,
    marginBottom: Sizes.xl2x,
  },
  skipText: {
    textAlign: "right",
    fontSize: Sizes.md3x,
    marginTop: Sizes.xl,
    color: Colors.light.muted,
  },
  ob: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circles: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: Sizes.xl,
  },
  circle: {
    width: 6,
    height: 6,
    borderRadius: 50,
    backgroundColor: "#2D2D2D",
    marginRight: 4,
    opacity: 0.2,
  },
  activeCircle: {
    backgroundColor: "#F43939",
    opacity: 1,
  },
  icon: {
    flexDirection: "row",
    justifyContent: "center",
  },
  btnEmail: {
    width: "100%",
    borderRadius: Sizes.md,
    paddingVertical: Sizes.md,
    backgroundColor: "#2D2D2D",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: Sizes.sm,
  },
  message: {
    color: "#2D2D2D",
  },
  textEmail: {
    color: Colors.white,
    textAlign: "center",
    fontSize: Sizes.md2x,
    marginTop: 1,
  },
  textPhone: {
    textAlign: "center",
    fontSize: Sizes.md2x,
    marginTop: 1,
  },
  btnPhone: {
    width: "100%",
    backgroundColor: Colors.white,
    borderRadius: Sizes.md,
    paddingVertical: Sizes.md,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: Sizes.sm,
    marginTop: Sizes.md,
  },
  messageLink: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  link: {
    color: "#F43939",
    marginLeft: 10,
  },
  MessageIcon: {
    width: 24,
    height: 24,
    marginTop: 10,
  },
});
