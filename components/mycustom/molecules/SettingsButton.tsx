import React from 'react';
import { Pressable, Text } from 'react-native';
import { styled } from 'nativewind';

const StyledPressable = styled(Pressable);
const StyledText = styled(Text);

export default function SettingsButton() {
  return (
    <StyledPressable className="p-4 bg-gray-300 rounded-lg">
      <StyledText className="text-center">Settings</StyledText>
    </StyledPressable>
  );
}
