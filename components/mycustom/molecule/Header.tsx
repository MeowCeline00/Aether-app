import React, { useState } from 'react';
import { View, Pressable } from 'react-native';
import AvatarButton from '@/components/mycustom/atom/AvatarButton';
import { Icon } from '@ui-kitten/components';
import { styled } from 'nativewind';

const StyledView = styled(View);

export default function Header() {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <StyledView className="flex-row justify-between items-center p-5 bg-gray-200 rounded-t-lg">
      <AvatarButton />

      <StyledView>
        <Pressable
          style={{
            marginTop: 15,
            backgroundColor: isPressed ? '#D1D1D1' : 'transparent', 
            borderRadius: 30, 
            padding: 10,
          }}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          onPress={() => {
            console.log('Menu icon pressed!');
          }}
        >
          <Icon name="menu-outline" fill="black" width={50} height={50} />
        </Pressable>
      </StyledView>
    </StyledView>
  );
}
