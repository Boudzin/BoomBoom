import { View, Text, Image } from "react-native";
import React from "react";
import SongCard from "../../components/SongCard";
import { Link } from "expo-router";
import { images } from "../../constants";

const home = () => {
  //fetch de l'api pour passer une parametre le titre et l'auteur de la musique a <SongCard/>
  return (
    <View className="h-full">
      <View className="flex justify-between items-center">
        <Text className=" font-psemibold text-3xl mt-10 text-center">
          BoomBoom
        </Text>
        <Link href="/accountPage">
          <Image
            source={images.account}
            className=" h-10 w-10"
            resizeMode="contain"
          />
        </Link>
      </View>
      <SongCard />
    </View>
  );
};

export default home;
