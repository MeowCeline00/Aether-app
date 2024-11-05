import React from 'react';
import { Pressable } from 'react-native';
import { Icon } from '@ui-kitten/components';

export default function Settings() {
  return (
    <Pressable onPress={() => console.log('Settings pressed')}>
      <Icon name="settings-outline" fill="black" width={24} height={24} />
    </Pressable>
  );
}
