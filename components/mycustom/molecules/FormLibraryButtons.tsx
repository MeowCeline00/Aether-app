import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function FormLibraryButton() {
  return (
    <StyledView className="p-4 bg-white rounded-lg shadow-md">
      <StyledText className="text-lg font-semibold">Library Button</StyledText>
    </StyledView>
  );
}
