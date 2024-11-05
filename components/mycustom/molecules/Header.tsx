import React from 'react';
import { View, Text } from 'react-native';
import AvatarButton from '../atoms/AvatarButton';
import Settings from '../atoms/Settings';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function Header() {
  return (
    <StyledView className="flex-row justify-between items-center p-5 bg-gray-200">
      <AvatarButton />
      <StyledText className="text-lg font-bold">Welcome!</StyledText>
      <Settings />
    </StyledView>
  );
}
