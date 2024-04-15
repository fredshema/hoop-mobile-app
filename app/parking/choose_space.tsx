import LayoutHeader from "@/components/LayoutHeader";
import { PrimaryButton } from "@/components/ThemedButton";
import Sizes from "@/constants/Sizes";
import { router } from "expo-router";
import { ImageBackground, StyleSheet, View } from "react-native";

export default function ChooseSpace() {
  return (
    <>
      <View style={styles.container}>
        <LayoutHeader title="Choose Space" />
      </View>
      <ImageBackground
        style={styles.room}
        source={require("@/assets/parking/room.png")}
      ></ImageBackground>
      <View style={styles.container}>
        <PrimaryButton
          label="Book Space"
          onPress={() => router.push("/parking/booking/")}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Sizes.lg,
  },
  room: {
    flex: 1,
    marginVertical: Sizes.lg,
  },
});
