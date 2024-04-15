import { Icon } from "@/components/Icon";
import LayoutHeader from "@/components/LayoutHeader";
import { Text } from "@/components/Themed";
import { PrimaryButton } from "@/components/ThemedButton";
import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import { router } from "expo-router";
import { ImageBackground, StyleSheet, View } from "react-native";

export default function Booking() {
  return (
    <>
      <View style={styles.container}>
        <LayoutHeader title="Booking" />
      </View>
      <View style={{ flex: 1, flexDirection: "row", flexWrap: "nowrap" }}>
        <View style={styles.column}>
          <Text style={styles.title}>Add Insuranse?</Text>
          <View style={styles.iconsContainer}>
            <View style={styles.icons}>
              <Icon size="lg" name="fuel" />
            </View>
            <View style={styles.icons}>
              <Icon size="lg" name="car" />
            </View>
            <View style={styles.icons}>
              <Icon size="lg" name="screw-driver" />
            </View>
          </View>
        </View>
        <ImageBackground
          style={[styles.column]}
          source={require("@/assets/parking/booking-ring.png")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.price}>$35,00</Text>
        <PrimaryButton
          label="Pay"
          style={{ width: "60%", marginBottom: 0 }}
          onPress={() => {
            router.push("/parking/booking/details");
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Sizes.lg,
  },
  column: {
    flex: 1,
    padding: Sizes.lg,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontSize: Sizes.xl2x,
    marginBottom: Sizes.md,
  },
  iconsContainer: {
    flexDirection: "column",
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
    padding: Sizes.md,
    borderRadius: Sizes.lg,
    backgroundColor: Colors.white,
  },
  icons: {
    padding: Sizes.md,
    backgroundColor: Colors.light.background,
    marginVertical: Sizes.sm,
    borderRadius: Sizes.sm,
  },
  hourText: {
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: Sizes.lg,
    paddingHorizontal: Sizes.xl,
    paddingVertical: Sizes.md,
  },
  price: {
    fontSize: Sizes.xl,
    fontWeight: "bold",
  },
});
