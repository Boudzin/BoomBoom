import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";

const index = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ height: "100" }}>
        <ImageBackground
          source={images.bg}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        >
          <Text>Ca bug je sais </Text>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
