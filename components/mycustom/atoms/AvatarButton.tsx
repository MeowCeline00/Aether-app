import React from 'react';
import { Pressable, Image } from 'react-native';
import { styled } from 'nativewind';

const StyledPressable = styled(Pressable);
const StyledImage = styled(Image);

export default function AvatarButton() {
  return (
    <StyledPressable>
      <StyledImage
        source={require('@/images/avatar.png')}
        className="w-16 h-16 rounded-full"
      />
    </StyledPressable>
  );
}
