import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";
import Skip from "./Skip";
import Btn from "./Btn";
export default function Ob2(){
    return(
    
        <View style={styles.container}>
            <Skip/>
            <Text style={styles.title}>
            Hollaaa
            </Text>
            <Text style={styles.bodyMessage}>
            Find the best possible parking space nearby your desired destination
            </Text>
            <View style={styles.circles}>
                <Text style={styles.circle1}></Text>
                <Text  style={styles.circle2}></Text>
                <Text style={styles.circle3} ></Text>
            </View>
        <Btn/>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignContent:"center",
        justifyContent:"center",
        backgroundColor:"#EAEAF3",
    },
    images:{
        marginLeft:50,
    },
    circles:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:20,
       
    },
    circle1:{
        width:6,
        height:6,
        borderRadius:50,
        backgroundColor:"#2D2D2D",
        marginRight:4,
        opacity:0.2,
    },
    circle2:{
        width:6,
        height:6,
        borderRadius:50,
        backgroundColor:"#F43939",
        marginRight:4,
    },
    circle3:{
        width:6,
        height:6,
        borderRadius:50,
        backgroundColor:"#2D2D2D",
        opacity:0.2,
    },
    bodyMessage:{
        color:"#2D2D2D",
        opacity:0.5,
        fontSize:16,
        textAlign:"center",
    },
    title:{
color:"#2D2D2D",
fontSize:24,
textAlign:"center",
marginTop:20,
    }
})