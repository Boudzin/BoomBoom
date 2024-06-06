import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../../constants";
import { Link } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const accountPage = () => {
  return (
    <View className="h-full">
      <View className=" mt-5 p-8 left-0 w-full">
        <Link href="/home">
          <FontAwesomeIcon
            icon="fa-solid fa-arrow-left"
            color="#734789"
            size={25}
          />
        </Link>
      </View>
      <Text className=" pl-10 text-2xl font-psemibold text-[#7D82B8]">
        Profil
      </Text>
      <View className="flex-1 justify-center px-10 bg-[#7D82B8] ">
        <FontAwesomeIcon icon="fa-regular fa-user" color="white" size={25} />
        <Text>Antoine Wanda</Text>
        <FontAwesomeIcon icon="fa-regular fa-pen" color="white" size={25} />
      </View>
    </View>
  );
};

export default accountPage;
