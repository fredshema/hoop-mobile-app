import React from "react";
import {Text, View, StyleSheet} from "react-native";
 export default function Skip(){
    return(
        <View style={styles.skip} >
        <Text style={styles.skipText}>Skip</Text>
        </View>
    )
 }
 const styles=StyleSheet.create({
    skip:{
       flexDirection:"row",
       justifyContent:"flex-end",
       marginRight:15,
       marginBottom:10,
    },
skipText:{
    color:"#2D2D2D",
    opacity:0.5,
}
 })