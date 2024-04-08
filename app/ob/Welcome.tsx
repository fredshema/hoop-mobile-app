import React from "react";
import Btn from "./Btn";
import {Text, View, StyleSheet, Image} from "react-native";
import Skip from "./Skip";
export default function Welcome(){
    return(
        <View style={styles.container}>
           <Skip/>
           <Image source={require("../../assets/auth/page1.png")} style={styles.images}/>
            <Text style={styles.title}>
                Welcome
            </Text>
            <Text style={styles.bodyMessage}>
            Find a best possible way to park
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
    bodyMessage:{
        color:"#2D2D2D",
        opacity:0.5,
        fontSize:16, 
        textAlign:"center",
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
        backgroundColor:"#F43939",
        marginRight:4,
    },
    circle2:{
        width:6,
        height:6,
        borderRadius:50,
        backgroundColor:"#2D2D2D",
        opacity:0.2,
        marginRight:4,
    },
    circle3:{
        width:6,
        height:6,
        borderRadius:50,
        backgroundColor:"#2D2D2D",
        opacity:0.2,
    },
    title:{
color:"#2D2D2D",
fontSize:24,
textAlign:"center",
marginTop:20,
    },
    images:{
        marginLeft:50,
    }
})