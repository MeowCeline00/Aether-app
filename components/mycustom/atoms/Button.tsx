import React from 'react';
import { Pressable, Text } from 'react-native';
import { styled } from 'nativewind';

const StyledPressable = styled(Pressable);
const StyledText = styled(Text);

interface ButtonProps {
  label: string;
  onPress: () => void;
}

export default function Button({ label, onPress }: ButtonProps) {
  return (
    <StyledPressable onPress={onPress} className="bg-blue-500 px-4 py-2 rounded-lg">
      <StyledText className="text-white text-center">{label}</StyledText>
    </StyledPressable>
  );
}
