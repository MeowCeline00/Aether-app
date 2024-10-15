import React, { useState } from 'react';
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
  const [isPressed, setIsPressed] = useState(false);

  return (
    <StyledView className="w-32">
      <StyledPressable
        className={`p-3 rounded-lg items-center ${isPressed ? 'bg-gray-400' : 'bg-gray-200'}`}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onPress={onPress}
      >
        <StyledText className="text-gray-800 font-medium">{label}</StyledText>
      </StyledPressable>
    </StyledView>
  );
}