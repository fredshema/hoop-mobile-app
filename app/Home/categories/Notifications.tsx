import Colors from "@/constants/Colors";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "@/components/Themed";
import { PrimaryButton } from "@/components/ThemedButton";
import { Icon } from "@/components/Icon";
import Notification from "./Notification";
export default function Notifications() {
    return(
        <View>
            <Text>Today</Text>
            <Notification/>
            <Notification/>
            <Notification/>
            <Text>June 12, 2021</Text>
            <Notification/>
            <Notification/>
        </View>
    )
}