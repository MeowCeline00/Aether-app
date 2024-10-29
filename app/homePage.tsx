import React from "react";
import { IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import MainContent from "@/components/mycustom/organism/MainContent";
import BottomNav from "@/components/mycustom/organism/BottomNav";
import { View } from "react-native";
import { styled } from "nativewind";
import { useLocalSearchParams } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';

const StyledView = styled(View);

export default function Index() {
  const { username } = useLocalSearchParams();
  return (
    <>
       <LinearGradient
        colors={["#88B5DF", "#ffffff"]} 
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.8 }}
        style={{ flex: 1 }}
      >
        <IconRegistry icons={EvaIconsPack} />
        <StyledView className="flex-1 justify-center items-center p-4">
          <MainContent userName={username || "Guest"} />
          <BottomNav />
        </StyledView>
      </LinearGradient>
    </>
  );
}
