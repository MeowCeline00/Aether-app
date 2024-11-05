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
    <StyledView className="p-4 bg-white rounded-lg shadow-md">
      <StyledText className="text-center text-lg">{message}</StyledText>
    </StyledView>
  );
}
