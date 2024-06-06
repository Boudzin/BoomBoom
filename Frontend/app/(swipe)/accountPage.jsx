import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../../constants";
import { Link } from "expo-router";

const accountPage = () => {
  return (
    <View className="h-full">
      <View className=" p-8 flex-1 flex-row justify-between">
        <Link href="/home">
          <Image
            source={images.flecheBack}
            className=" h-5 w-5"
            resizeMode="contain"
          />
        </Link>
        <Text className="text-lg font-psemibold justify-center items-center">
          Compte personnel
        </Text>
      </View>
    </View>
  );
};

export default accountPage;
