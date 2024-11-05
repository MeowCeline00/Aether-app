import React from 'react';
import { Icon } from '@ui-kitten/components';
import { Pressable } from 'react-native';
import { styled } from 'nativewind';

const StyledPressable = styled(Pressable);

export default function DarkMode() {
  return (
    <StyledPressable className="p-2 rounded-full bg-gray-800">
      <Icon name="moon-outline" fill="white" width={24} height={24} />
    </StyledPressable>
  );
}
