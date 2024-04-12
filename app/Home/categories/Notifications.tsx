import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "@/components/Themed";
import { PrimaryButton } from "@/components/ThemedButton";
import { Icon } from "@/components/Icon";
import Notification from "./Notification";
import Read from "./Read";
export default function Notifications() {
    return(
        <View style={styles.content}>
            <Text style={styles.title}>Notification</Text>
            <Text style={styles.subtitles}>Today</Text>
            <Notification/>
            <Notification/>
            <Read/>
            <Text style={styles.subtitles}>June 12, 2021</Text>
            <Read/>
            <Notification/>
        </View>
    )

}
const styles=StyleSheet.create({
    content:{
        marginTop:80,
    },
    subtitles:{
fontSize:Sizes.md3x,
marginLeft:25,
marginBottom:20,
    },
    title:{
        textAlign:"center",
        color:"#2D2D2D",
        fontSize:Sizes.md3x,
    }
})