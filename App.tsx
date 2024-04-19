import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View className=" h-full flex justify-center items-center">
      <Text className=" text-red-500 text-3xl text-center">
        Bienvenue sur l'application BoomBoom!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
