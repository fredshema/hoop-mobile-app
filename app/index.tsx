import { Icon } from "@/components/Icon";
import { Link, Text } from "@/components/Themed";
import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ob1 from "./ob/Ob1";

export default function RootHome() {
  const insets = useSafeAreaInsets();
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
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btnEmail}>
          <Text style={styles.textEmail}>
            <Icon name="message" />
            Login with Email
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnPhone}>
          <Text style={styles.textPhone}>
            <Icon name="call" />
            Login with Phone
          </Text>
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
  buttons: {
    alignItems: "center",
  },
  btnEmail: {
    width: 311,
    height: 60,
    borderRadius: 15,
    backgroundColor: "#2D2D2D",
    justifyContent: "center",
    alignItems: "center",
  },
  phoneIcon: {
    marginRight: 8,
  },
  emailIcon: {
    marginRight: 8,
  },
  textPhone: {
    color: "#2D2D2D",
    opacity: 0.7,
    textAlign: "center",
    marginLeft: 15,
    marginTop: 10,
    fontSize: 18,
  },
  message: {
    color: "#2D2D2D",
  },
  textEmail: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 18,
    marginLeft: 15,
    marginTop: 10,
  },
  btnPhone: {
    width: 311,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginTop: 20,
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
