import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledPressable = styled(Pressable);
const StyledText = styled(Text);
const StyledView = styled(View);

interface ButtonProps {
  label: string;
  onPress: () => void;
}

export default function Button({ label, onPress }: ButtonProps) {
  return (
    <StyledView className="w-40 items-center">
      <StyledPressable
        className="bg-blue-500 h-12 rounded-full justify-center items-center"
        onPress={onPress}
      >
        <StyledText className="text-white text-lg">{label}</StyledText>
      </StyledPressable>
    </StyledView>
  );
}
