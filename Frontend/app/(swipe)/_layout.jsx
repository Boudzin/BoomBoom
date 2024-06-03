import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const HomeLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="home"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="accountPage"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      <StatusBar backgroundColor="#734789" style="light" />
    </>
  );
};

export default HomeLayout;
