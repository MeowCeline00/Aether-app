import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function LibraryButton() {
  return (
    <StyledView className="p-4 bg-gray-200 rounded-lg">
      <StyledText className="text-center">Library</StyledText>
    </StyledView>
  );
}
