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
    <StyledView className="bg-white p-4 rounded-lg shadow-md my-2">
      <StyledText className="text-lg font-medium text-center">{message}</StyledText>
    </StyledView>
  );
}
