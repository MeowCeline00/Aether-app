import React from 'react';
import { Pressable, Text } from 'react-native';
import { styled } from 'nativewind';

const StyledPressable = styled(Pressable);
const StyledText = styled(Text);

export default function FilterButton() {
  return (
    <StyledPressable className="p-2 bg-gray-300 rounded-full">
      <StyledText className="text-center text-black">Filter</StyledText>
    </StyledPressable>
  );
}
