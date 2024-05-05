import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RootLayout = () => {
  return (
    <View className=" h-full flex justify-center items-center">
      <Text className=" text-red-500 text-3xl text-center">
        Bienvenue sur l'application BoomBoom!
      </Text>
    </View>
  );
};

export default RootLayout;
