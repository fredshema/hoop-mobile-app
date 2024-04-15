import { Icon } from "@/components/Icon";
import LayoutHeader from "@/components/LayoutHeader";
import { Text } from "@/components/Themed";
import { SearchInput } from "@/components/ThemedInput";
import SimpleParkingSpotCard from "@/components/cards/SimpleParkingSpotCard";
import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function History() {
  const recentParkingSpots = [
    {
      title: "Graha Mall",
      address: "123 Dhaka Street",
      time: "7 min",
      price: "$7",
      image: require("@/assets/auth/mall1.png"),
    },
    {
      title: "Graha Mall",
      address: "123 Dhaka Street",
      time: "7 min",
      price: "$7",
      image: require("@/assets/auth/mall2.png"),
    },
  ];

  const thisWeekParkingSpots = [
    {
      title: "Graha Mall",
      address: "123 Dhaka Street",
      time: "7 min",
      price: "$7",
      image: require("@/assets/auth/mall1.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.content}>
        <LayoutHeader title="History" backHidden />
        <View style={styles.header}>
          <SearchInput dark placeholder="Search" style={styles.search} />
          <View style={styles.filter}>
            <Icon name="filter" />
          </View>
        </View>
        <Text style={styles.titles}>Recently</Text>
        {recentParkingSpots.map((spot, index) => (
          <SimpleParkingSpotCard
            key={index}
            {...spot}
            onPress={() => {
              router.push("/home/history/details");
            }}
          />
        ))}
        <Text style={styles.titles}>This week</Text>
        {thisWeekParkingSpots.map((spot, index) => (
          <SimpleParkingSpotCard
            key={index}
            {...spot}
            onPress={() => {
              router.push("/home/history/details");
            }}
          />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4FA",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Sizes.md,
    marginBottom: Sizes.lg,
    gap: Sizes.sm,
  },
  content: {
    marginTop: 60,
    marginLeft: 20,
    marginRight: 20,
  },
  titles: {
    fontSize: Sizes.md3x,
    marginBottom: Sizes.sm,
    marginTop: Sizes.md,
  },
  search: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  icon: {
    backgroundColor: "#EAEAF3",
    width: 54,
    height: 55,
    padding: 15,
    borderRadius: 15,
  },
  placeholder: {
    color: "#2D2D2D",
    opacity: 0.4,
  },
  filter: {
    backgroundColor: Colors.light.background,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Sizes.sm,
    paddingHorizontal: Sizes.md,
  },
});
