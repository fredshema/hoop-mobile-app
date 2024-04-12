import Sizes from "@/constants/Sizes";
import Colors from "@/constants/Colors";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "@/components/Themed";
import { PrimaryButton } from "@/components/ThemedButton";
import { Icon } from "@/components/Icon";
export default function  Read() {
    return(
        <View>
            <View style={styles.layout}>
            <Text style={styles.line}></Text>
            <View style={styles.messages}>
            <Text style={styles.title}>Order Successful</Text>
            <Text style={styles.subtitle}>Congrats on your reserved parking space...</Text>
            </View>
<Text style={styles.time}>12:34</Text>
</View>
 </View>
    )
}
const styles=StyleSheet.create({
layout:{
    flexDirection:"row",
    justifyContent:"space-around",
    backgroundColor:Colors.dark.text,
    padding:15,
    borderRadius:Sizes.sm1x,
    marginLeft:25,
    marginRight:20,
    marginBottom:18,
},
messages:{
marginLeft:15,
},
line:{
width:3,
height:47,
backgroundColor:"#FFF3F3",
borderTopRightRadius:15,
borderBottomRightRadius:15,
},
title:{
    color:"#2D2D2D",
    fontSize:Sizes.md2x,
    opacity:0.6,
},
time:{
    color:"#2D2D2D",
    opacity:0.3,
    fontSize:Sizes.sm1x,
},
subtitle:{
color:"#2D2D2D",
opacity:0.5,
fontSize:Sizes.sm3x,
},
})