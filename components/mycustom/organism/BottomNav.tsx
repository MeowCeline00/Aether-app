import React, { useState } from 'react';
import { View, Pressable } from 'react-native';
import { Icon } from '@ui-kitten/components';
import { styled } from 'nativewind';

const StyledView = styled(View);

export default function BottomNav() {
  const [isHomePressed, setHomePressed] = useState(false);
  const [isCameraPressed, setCameraPressed] = useState(false);
  const [isPersonPressed, setPersonPressed] = useState(false);

  return (
    <StyledView className="flex-row justify-around items-center p-4 bg-gray-200 border-t border-gray-300">
      {/* Home Icon */}
      <StyledView>
        <Pressable
          onPressIn={() => setHomePressed(true)}
          onPressOut={() => setHomePressed(false)}
          onPress={() => console.log('Home icon pressed')}
          style={{
            backgroundColor: isHomePressed ? '#D1D1D1' : 'transparent',
            borderRadius: 20,
            padding: 10,
          }}
        >
          <Icon name="home-outline" fill="black" width={32} height={32} />
        </Pressable>
      </StyledView>

      {/* Camera Icon */}
      <StyledView>
        <Pressable
          onPressIn={() => setCameraPressed(true)}
          onPressOut={() => setCameraPressed(false)}
          onPress={() => console.log('Camera icon pressed')}
          style={{
            backgroundColor: isCameraPressed ? '#A9A9A9' : '#D3D3D3', 
            borderRadius: 24,
            padding: 12,
          }}
        >
          <Icon name="camera-outline" fill="black" width={28} height={28} />
        </Pressable>
      </StyledView>

      {/* Person Icon */}
      <StyledView>
        <Pressable
          onPressIn={() => setPersonPressed(true)}
          onPressOut={() => setPersonPressed(false)}
          onPress={() => console.log('Person icon pressed')}
          style={{
            backgroundColor: isPersonPressed ? '#D1D1D1' : 'transparent',
            borderRadius: 20,
            padding: 10,
          }}
        >
          <Icon name="person-outline" fill="black" width={32} height={32} />
        </Pressable>
      </StyledView>
    </StyledView>
  );
}
