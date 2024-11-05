import React from 'react';
import { View, Pressable } from 'react-native';
import { Icon } from '@ui-kitten/components';
import { styled } from 'nativewind';

const StyledView = styled(View);

export default function BottomNav() {
  return (
    <StyledView className="flex-row justify-around items-center p-4 bg-white border-t border-gray-300">
      <Pressable onPress={() => console.log('Home pressed')}>
        <Icon name="home-outline" fill="black" width={32} height={32} />
      </Pressable>
      <Pressable onPress={() => console.log('Camera pressed')}>
        <Icon name="camera-outline" fill="black" width={32} height={32} />
      </Pressable>
      <Pressable onPress={() => console.log('Profile pressed')}>
        <Icon name="person-outline" fill="black" width={32} height={32} />
      </Pressable>
    </StyledView>
  );
}
