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
      colors={['#ffffff', '#c4d3ff']} 
      style={{ flex: 1 }} 
    >
        <IconRegistry icons={EvaIconsPack} />
        <StyledView className="flex-1">
          <MainContent userName={username || "Guest"} />
          <BottomNav />
        </StyledView>
      </LinearGradient>
    </>
  );
}
