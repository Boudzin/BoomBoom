import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const accountPage = () => {
  return (
    <ScrollView>
      <View className=" mt-5 p-8 left-0 w-full">
        <Link href="/home">
          <FontAwesomeIcon
            icon="fa-solid fa-arrow-left"
            color="#734789"
            size={25}
          />
        </Link>
      </View>

      <Text className=" pl-10 mb-2 text-2xl font-pbold text-[#734789]">
        Profil
      </Text>
      <View className=" mx-4 rounded-2xl flex flex-row justify-evenly items-center py-5 bg-[#7D82B8] h-[70px]">
        <FontAwesomeIcon icon="fa-regular fa-user" color="white" size={25} />
        <Text className=" text-xl font-psemibold text-white">
          Antoine Wanda
        </Text>
        <FontAwesomeIcon icon="fa-solid fa-pen" color="white" size={25} />
      </View>
      <Text className=" pl-10 mt-5 mb-2 text-xl font-psemibold text-[#734789]">
        Compte
      </Text>
      <View className=" mx-4 rounded-2xl flex flex-col justify-between text-left bg-[#7D82B8] h-44 p-5">
        <Text className=" text-xl font-psemibold text-white ">
          Détails du compte
        </Text>
        <View className="h-[3px] bg-[#9da1d6] w-full" />
        <Text className=" text-xl font-psemibold text-white">
          Styles de musique préférés
        </Text>
        <View className="h-[3px] bg-[#9da1d6] w-full" />

        <Text className=" text-xl font-psemibold text-white">
          Historique des likes
        </Text>
      </View>
      <Text className=" pl-10 mt-5 mb-2 text-xl font-psemibold text-[#734789]">
        Notifications
      </Text>
      <View className=" mx-4 rounded-2xl flex flex-col justify-between text-left bg-[#7D82B8] h-28 p-5">
        <Text className=" text-xl font-psemibold text-white ">
          Recevoir les notifications
        </Text>
        <View className="h-[3px] bg-[#9da1d6] w-full" />
        <Text className=" text-xl font-psemibold text-white">
          Partager vos datas
        </Text>
      </View>

      <Text className=" pl-10 mt-5 mb-2 text-xl font-psemibold text-[#734789]">
        Autre
      </Text>
      <View className=" mb-5 mx-4 rounded-2xl flex flex-col justify-between text-left bg-[#7D82B8] h-48 p-5">
        <Text className=" text-xl font-psemibold text-white ">
          Devenir partenaire{" "}
        </Text>
        <View className="h-[3px] bg-[#9da1d6] w-full" />
        <Text className=" text-xl font-psemibold text-white">
          Nous contacter{" "}
        </Text>
        <View className="h-[3px] bg-[#9da1d6] w-full" />

        <Text className=" text-xl font-psemibold text-white ">
          Aide & Support{" "}
        </Text>
        <View className="h-[3px] bg-[#9da1d6] w-full" />
        <Text className=" text-xl font-psemibold text-white">
          En savoir plus
        </Text>
      </View>
    </ScrollView>
  );
};

export default accountPage;
