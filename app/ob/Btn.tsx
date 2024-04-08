import React from "react";
import {Text, TouchableOpacity, View, Image,StyleSheet} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons'
export default function buttons(){
    return(
        <View style={styles.buttons}>
        <TouchableOpacity style={styles.btnEmail}>
        <Text style={styles.textEmail}>

        Login with Email
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnPhone}>
        <Text style={styles.textPhone }>
        Login with Phone
        </Text>
        </TouchableOpacity>
        <View style={styles.messageLink}>
        <Text style={styles.message}>Don't have an account?</Text>
        <Text style={styles.link}>Sign Up</Text>
        </View>
        </View>
    )
}

const styles=StyleSheet.create({
    buttons:{
marginLeft:30,
    },
btnEmail:{
    marginTop:40,
    width:311,
    height:60,
    borderRadius:15,
    backgroundColor:"#2D2D2D",
},
phoneIcon:{
    marginRight:8,
},
emailIcon:{
    marginRight:8,    
},
textPhone:{
    color:"#2D2D2D",
    opacity:0.7,
     textAlign:"center",
    marginTop:15,
    fontSize:18,
   
},
message:{
color:"#2D2D2D",
},
textEmail:{
    color:"#FFFFFF",
    textAlign:"center",
    marginTop:15,
    fontSize:18,
   
},
btnPhone:{
    width:311,
    height:60,
    backgroundColor:"#FFFFFF",
    borderRadius:15,
    marginTop:20,
},
messageLink:{
    flexDirection:"row",
    justifyContent:"center",
    marginTop:20,
},
link:{
    color:"#F43939",
    marginLeft:10,
}

})