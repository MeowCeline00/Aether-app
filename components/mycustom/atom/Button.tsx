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
    <StyledView className="w-40 items-center">  
      <StyledPressable
        className={`items-center justify-center w-full h-14 rounded-lg ${isPressed ? 'bg-gray-400' : 'bg-white'}`}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onPress={onPress}
        style={{
          borderWidth: 1,
          borderColor: '#D1D1D1', 
        }}
      >
        <StyledText className="text-black font-medium">{label}</StyledText>
      </StyledPressable>
    </StyledView>
  );
}
