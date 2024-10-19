import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

interface DialogProps {
  message: string;
}

export default function Dialog({ message }: DialogProps) {
  return (
    <StyledView className="bg-gray-300 rounded-lg p-4 mx-4 my-2 shadow-md">
      <StyledText className="text-lg font-medium text-center">Hello, {message}</StyledText>
    </StyledView>
  );
}