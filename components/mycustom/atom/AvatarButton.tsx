import React from 'react';
import { Pressable, Image, View } from 'react-native';
import { styled } from 'nativewind';

const StyledPressable = styled(Pressable);
const StyledImage = styled(Image);
const StyledView = styled(View);

export default function AvatarButton() {
  return (
    <StyledView>
      <StyledPressable>
        <StyledImage
          source={require('@/images/alice002.png')}
          className="w-20 h-20 rounded-full mt-3"
        />
      </StyledPressable>
    </StyledView>
  );
}
