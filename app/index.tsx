import React from "react";
import { IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import MainContent from "@/components/mycustom/organism/MainContent";
import BottomNav from "@/components/mycustom/organism/BottomNav";
import { View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);

export default function Index() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <StyledView className="flex-1">
        <MainContent />
        <BottomNav />
      </StyledView>
    </>
  );
}
