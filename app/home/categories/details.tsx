import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Icon } from "@/components/Icon";
import  SimpleParkingSpotCard  from "@/components/cards/SimpleParkingSpotCard";

export default function CategoryDetails() {
    const parkingSpots = [
        {
            title: "Graha Mall",
            address: "123 Dhaka Street",
            time: "7 min",
            price: "$7",
            image: require("../../../assets/auth/mall1.png"),
        },
        {
            title: "Graha Mall",
            address: "123 Dhaka Street",
            time: "7 min",
            price: "$7",
            image: require("../../../assets/auth/mall1.png"),
        },
        {
            title: "Graha Mall",
            address: "123 Dhaka Street",
            time: "7 min",
            price: "$7",
            image: require("../../../assets/auth/mall1.png"),
        },
        {
            title: "Graha Mall",
            address: "123 Dhaka Street",
            time: "7 min",
            price: "$7",
            image: require("../../../assets/auth/gmall.png"),
        },
        {
            title: "Graha Mall",
            address: "123 Dhaka Street",
            time: "7 min",
            price: "$7",
            image: require("../../../assets/auth/gmall.png"),
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.search}>
                    <Text style={styles.icon}><Icon name="filter" /></Text>
                    <Text style={styles.title}>Detail Category</Text>
                    <Text style={styles.icon}><Icon name="filter" /></Text>
                </View>
                <View style={styles.titleElements}>
                    <View style={styles.location}>
                        <Text style={styles.log}>
                            Nearst
                        </Text>
                        <Text style={styles.circle}></Text>
                    </View>
                    <Text style={styles.message}>Most Popular  Most Wanted</Text>
                </View>
                {parkingSpots.map((spot, index) => (
                    <SimpleParkingSpotCard key={index} {...spot} />
                ))}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F4FA",
    },
    content: {
        marginTop: 60,
        marginLeft: 20,
        marginRight: 20,
    },
    title: {
        textAlign: "center",
        color: "#2D2D2D",
        fontSize: 20,
        marginBottom: 30,
    },
    location: {
        backgroundColor: "#081024",
        width: 73,
        height: 56,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        flexDirection: "column",
        justifyContent: "center",
        marginRight: 20,
        marginBottom: 50,
    },
    search: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 30,
    },
    log: {
        color: "#FFFFFF",
        textAlign: "center",

    },
    circle: {
        backgroundColor: "#F43939",
        width: 6,
        height: 6,
        borderRadius: 50,
        marginTop: 6,
        marginLeft: 33,

    },
    titleElements: {
        flexDirection: "row",
    },
    message: {
        marginTop: 20,
        fontSize: 16,
        color: "#2D2D2D",
        opacity: 0.4,
        lineHeight: 21.28,
    },
    icon: {
        backgroundColor: "#EAEAF3",
        width: 54,
        height: 55,
        padding: 5,
        textAlign: "center",
        borderRadius: 15,
    }
})