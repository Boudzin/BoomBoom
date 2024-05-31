import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "../components/CustomButton";
import { images } from "../constants";

const Welcome = () => {
  return (
    <SafeAreaView className=" bg-blue-100 h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4 ">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[200px]"
          />
          <CustomButton
            title="Connectez-vous"
            textStyles="font-psemibold"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;
