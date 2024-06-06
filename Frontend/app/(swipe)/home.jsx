import React, { useRef, useState } from "react";
import { View, Text, Image, Button } from "react-native";
import SongCard from "../../components/SongCard";
import { Link } from "expo-router";
import { images } from "../../constants";
import CustomButton from "../../components/CustomButton";

const home = () => {
  const cardRef = useRef(null);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleSwipeLeft = () => {
    setDisliked(true);
    setTimeout(() => setDisliked(false), 500);
  };

  const handleSwipeRight = () => {
    setLiked(true);
    setTimeout(() => setLiked(false), 500);
  };

  return (
    <View>
      <View className="flex flex-row justify-between items-center my-4 px-3">
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
      <View className="flex justify-center items-center">
        <SongCard
          ref={cardRef}
          onSwipeLeft={handleSwipeLeft}
          onSwipeRight={handleSwipeRight}
        />
        {liked && (
          <Text className=" absolute top-12 left-12 text-lg text-green-500">
            J'aime
          </Text>
        )}
        {disliked && (
          <Text className=" absolute top-12 left-12 text-lg text-red-500">
            Je n'aime pas
          </Text>
        )}
        <View className=" flex-row mt-5 w-full justify-center">
          <CustomButton
            title="Dislike"
            containerStyles="mt-3 mx-3 px-5"
            handlePress={() => cardRef.current.swipeLeft()}
          />
          <CustomButton
            title="Like"
            containerStyles="mt-3 px-5 mx-3"
            handlePress={() => cardRef.current.swipeRight()}
          />
        </View>
      </View>
    </View>
  );
};

export default home;
