import React from "react";
import {View, StyleSheet, Image, ImageSourcePropType } from "react-native";
import { Text } from "@/components/Themed";
type SimpleParkingSpotCardProps = {
    title: string,
    address: string,
    price: string,
    time: string,
    image: ImageSourcePropType,
}

export default function SimpleParkingSpotCard(props: SimpleParkingSpotCardProps) {
    return (
        <View style={styles.card1}>
            <Image source={props.image} />
            <View style={styles.details}>
                <Text style={styles.title1}>{props.title}</Text>
                <Text style={styles.title2}>{props.address}</Text>
                <Text style={styles.title3}>{props.price}<Text style={styles.span}>/hour</Text></Text>
            </View>
            <Text style={styles.timeButton}>{props.time}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    card1: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        padding: 15,
        marginBottom: 20,
    },
    timeButton: {
        backgroundColor: "#FFF3F3",
        color: "#F43939",
        opacity: 0.8,
        fontSize: 12,
        borderRadius: 15,
        textAlign: "center",
        padding: 4,
        width: 59,
        height: 26,
    },
    details: {
        marginTop: 15,
    },
    title1: {
        color: "#2D2D2D",
        fontSize: 18,
    },
    title2: {
        color: "#2D2D2D",
        fontSize: 14,
        marginBottom: 15,
        opacity: 0.5,
    },
    title3: {
        color: "#F43939",
        fontSize: 20,
    },
    span: {
        fontSize: 12,
        color:"#F43939",
    }
});