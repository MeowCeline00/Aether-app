import React from 'react';
import { View, Pressable } from 'react-native';
import AvatarButton from '@/components/mycustom/atom/AvatarButton';
import { Icon } from '@ui-kitten/components';
import { styled } from 'nativewind';

const StyledView = styled(View);

export default function Header() {
  return (
    <StyledView className="flex-row justify-between items-center p-5 bg-white">
      <AvatarButton />
      <Pressable onPress={() => console.log('Settings pressed')}>
        <Icon name="settings-2-outline" fill="black" width={32} height={32} />
      </Pressable>
    </StyledView>
  );
}
