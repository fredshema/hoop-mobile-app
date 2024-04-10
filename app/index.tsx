import Sizes from "@/constants/Sizes";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ob1 from "./ob/Ob1";
export default function Home() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <Text style={styles.skipText}>Skip</Text>
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
          <Text style={styles.textEmail}>Login with Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnPhone}>
          <Text style={styles.textPhone}>Login with Phone</Text>
        </TouchableOpacity>
        <View style={styles.messageLink}>
          <Text style={styles.message}>Don't have an account?</Text>
          <Text style={styles.link}>Sign Up</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Sizes.lg,
  },
  skipText: {
    textAlign: "right",
    fontSize: Sizes.md3x,
    fontFamily: "Avenir",
    marginTop: Sizes.xl,
  },
  ob: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circles: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
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
  buttons: {
    alignItems: "center",
  },
  btnEmail: {
    marginTop: 40,
    width: 311,
    height: 60,
    borderRadius: 15,
    backgroundColor: "#2D2D2D",
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
    marginTop: 15,
    fontSize: 18,
  },
  message: {
    color: "#2D2D2D",
  },
  textEmail: {
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 15,
    fontSize: 18,
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
});
