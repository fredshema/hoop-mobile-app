import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from "./ob/Welcome";
import Ob2 from "./ob/Ob2";
import Ob3 from "./ob/Ob3";
import Profile from "./profile/Profile";
const Stack = createNativeStackNavigator();
export default function Home() {
  return (
  //   <NavigationContainer>
  //   <Stack.Navigator>
  //   <Stack.Screen name="ob1" component={Welcome} options={{headerShown:false}}/>
  //   <Stack.Screen name="ob2" component={Ob2} options={{headerShown:false}} />
  //   <Stack.Screen name="ob3" component={Ob3} options={{headerShown:false}}/>
  //   </Stack.Navigator>
  // </NavigationContainer>
  <Welcome/>
 
  );
}


