import { APPWRITE_PROJECT_ID } from "@env";
import { Platform } from "react-native";
import { Client } from "react-native-appwrite/src";

const IOS_PLATFORM = "com.example.hoop";
const platform = Platform.OS === "ios" ? IOS_PLATFORM : "android";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(APPWRITE_PROJECT_ID)
  .setPlatform(platform);

export default client;
