import React from "react";
import Sizes from "@/constants/Sizes";
import Colors from "@/constants/Colors";
import { Image, StyleSheet, TouchableOpacity, View,TextInput } from "react-native";
import { Text } from "@/components/Themed";
import { PrimaryButton } from "@/components/ThemedButton";
import { Icon } from "@/components/Icon";
export default function Edit(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Edit Profile</Text>
            <View style={styles.images}>
            <Image source={require("../../assets/auth/edit-profile.png")}/> 
        </View>
        <View style={styles.input}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.inputText}><Text>Echa</Text></TextInput>
        <View style={styles.layouts}>
        <Text style={styles.label}>Type</Text>
        <View style={styles.label2}>
        <Text style={styles.label}>ID</Text>
        </View>
        </View>
        <View style={styles.layout}>
        <TextInput style={styles.minInput}><Text>Car Sport <Image source={require("../../assets/auth/Arrowdown.png")} style={styles.icon}/> </Text></TextInput>
        <TextInput style={styles.minInput}><Text>C68721</Text></TextInput>
        </View>
        <Text style={styles.label}>Address</Text>
        <TextInput style={styles.inputText}><Text>Address</Text></TextInput>
        <View style={styles.btns}>
        <TouchableOpacity style={styles.cancel}><Text style={styles.txtCancel}>Cancel</Text></TouchableOpacity>
        <TouchableOpacity style={styles.save}><Text  style={styles.txtSave}>Save</Text></TouchableOpacity>
        </View>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      alignContent: "center",
      justifyContent: "center",
      backgroundColor:"#F4F4FA"
    },
    label:{
        color:"#2D2D2D",
        opacity:0.5,
        fontSize:Sizes.md,
        marginBottom:Sizes.sm1x,
    },
    title: {
        color: "#2D2D2D",
        fontSize: Sizes.lg,
        textAlign: "center",
      },
    layout:{
        flexDirection:"row",
    },
    layouts:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
 label2:{
marginRight:170,
 },
    input:{
marginLeft:35,
marginTop:40,
    },
    cancel:{
        width:146,
        height:60,
        backgroundColor:"#EAEAF3",
        borderRadius:Sizes.sm1x,
        marginRight:20,
    },
    save:{
        width:146,
        height:60,
        backgroundColor:"#130F26",
        borderRadius:Sizes.sm1x,
    },
    icon:{
        width:16,
        height:16,
    },
    minInput:{
        width:146,
        height:60,
        backgroundColor:Colors.dark.text,
        borderRadius:Sizes.sm1x,
        padding:10,
        marginBottom:20,
        marginRight:20,
    },
    inputText:{
        width:311,
        height:54,
        backgroundColor:Colors.dark.text,
        borderRadius:Sizes.sm1x,
        padding:10,
        marginBottom:20,
    },
    images:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:20,
      },
      btns:{
        flexDirection:"row",
        marginTop:70,
    },
    txtCancel:{
        textAlign:"center",
        paddingTop:10,
        color:"#2D2D2D",
        opacity:0.5,
        fontSize:Sizes.md3x,
    },
    txtSave:{
        textAlign:"center",
        paddingTop:10,  
        color:Colors.dark.text,
        fontSize:Sizes.md3x,
    }
})