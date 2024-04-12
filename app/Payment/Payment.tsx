import Sizes from "@/constants/Sizes";
import Colors from "@/constants/Colors";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "@/components/Themed";
import { PrimaryButton } from "@/components/ThemedButton";
import { Icon } from "@/components/Icon";
export default function Payment() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Payment</Text>
        <View style={styles.card}>
        <View style={styles.images}>
      <Image source={require("../../assets/auth/mall3.png")}/>
      </View>
      <Text style={styles.title}>Graha Mall</Text>
      <Text style={styles.bodyMessage}>123 Dhaka Street</Text>
      <View style={styles.icons}>
      <Text style={styles.background}><Image source={require("../../assets/auth/location.png")}/> A-6</Text>
      <Text style={styles.background}><Image source={require("../../assets/auth/clock.png")}/> 4 hours</Text>
      </View>
      </View>
      <View style={styles.rectangle}>
<Text style={styles.txt}>Input voucher code</Text>
<Text style={styles.use}>Use</Text>
    </View>
    <View style={styles.card}>
        <View style={styles.prices}>
        <Text style={styles.texts}>Sub total</Text>
        <Text style={styles.cost}>$30,00</Text>
        </View>
        <View style={styles.prices}>
        <Text style={styles.texts}>Insurance</Text>
        <Text style={styles.cost}>$5,00</Text>
        </View>
        <Text style={styles.line}></Text>
        <View style={styles.prices}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.totalPrice}>$35,00</Text>
        </View>
        </View>
      <View style={styles.button}>
      <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Pay Now</Text>
          </TouchableOpacity>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor:"#F4F4FA"
  },
  bodyMessage: {
    color: "#2D2D2D",
    opacity: 0.5,
    fontSize: Sizes.sm3x,
    textAlign:"center",
    marginBottom:10,
  },
  use:{
    color:"#F43939",
  },
  txt:{
    fontSize:Sizes.md2x,
    marginRight:30,
    color:"#2D2D2D",
    opacity:0.2,
      },
  title: {
    color: "#2D2D2D",
    fontSize: Sizes.lg,
    textAlign: "center",
    marginTop:10,
  },
  card:{
backgroundColor:Colors.dark.text,
margin:30,
padding:30,
borderRadius:Sizes.sm1x,

  },
line:{
width:271,
height:0,
borderWidth:1,
borderColor:"#2D2D2D",
opacity:0.05,
marginBottom:Sizes.sm1x,},
prices:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:Sizes.sm1x,
},
cost:{
  color:"#2D2D2D",
  fontSize:Sizes.md,
},
total:{
  color:"#2D2D2D",
  fontSize:16,
},
totalPrice:{
  color:"#2D2D2D",
  fontSize:18,
},
  rectangle:{
    backgroundColor:Colors.dark.text,
    flexDirection:"row",
    justifyContent:"space-around",
    width:311,
    height:61,
    padding:15,
    marginLeft:30,
    borderRadius:15,
  },
  texts:{
color:"#2D2D2D",
opacity:0.6,
fontSize:Sizes.md,
  },
  paragraph:{
    marginLeft:20,
    color:"#2D2D2D",
    opacity:0.2,
    fontSize:Sizes.md2x,
  },
  background:{
    backgroundColor:"#FFF3F3",
    width:91,
    color:"#F43939",
    height:35,
    textAlign:"center",
    marginLeft:20,
    padding:5,
    fontSize:Sizes.sm3x,
    borderRadius:Sizes.sm1x,
  },
  icons:{
    flexDirection:"row",
    justifyContent:"center",
  },
  images:{
    flexDirection:"row",
    justifyContent:"center",
  },
  button:{
flexDirection:"row",
justifyContent:"center",
marginTop:2,

  },
  btnText:{
color:Colors.dark.text,
textAlign:"center",
marginTop:15,
fontSize:Sizes.md3x,
  },
  btn:{
    backgroundColor:"#130F26",
    borderRadius:15,
    width:311,
    height:60,
  }
});

