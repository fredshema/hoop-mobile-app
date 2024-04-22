import { APPWRITE_PROJECT_ID } from "@env";
import { Platform } from "react-native";
import { Client } from "react-native-appwrite/src";

const platform = Platform.OS === "ios" ? "ios" : "android";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(APPWRITE_PROJECT_ID)
  .setPlatform(platform);

export default client;
