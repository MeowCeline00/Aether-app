import React from 'react';
import { View } from 'react-native';
import Header from '@/components/mycustom/molecule/Header';
import Button from "@/components/mycustom/atom/Button";
import Dialog from "@/components/mycustom/atom/Dialog";
import { styled } from 'nativewind';

const StyledView = styled(View);

export default function MainContent() {
  return (
    <StyledView className="flex-1 bg-white">
      <Header />
      <StyledView className="mt-4 mb-4">
        <Dialog message="hello ABC" />
      </StyledView>
      <StyledView className="flex-row justify-around mt-4 mb-4">
        <Button label="Forms" onPress={() => {}} />
        <Button label="Upload File" onPress={() => {}} />
      </StyledView>
      <StyledView className="flex-1 px-4 space-y-4">
        <StyledView className="h-16 bg-gray-300 rounded-lg" />
        <StyledView className="h-16 bg-gray-300 rounded-lg" />
        <StyledView className="h-16 bg-gray-300 rounded-lg" />
      </StyledView>
    </StyledView>
  );
}
