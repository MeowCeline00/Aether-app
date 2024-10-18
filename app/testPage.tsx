import React, { useState } from "react";
import { Pressable, View } from 'react-native';
import { Icon, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledPressable = styled(Pressable);

export default function TestUIs() {
  const [isMenuPressed, setMenuPressed] = useState(false);
  const [isHomePressed, setHomePressed] = useState(false);
  const [isPhotoPressed, setPhotoPressed] = useState(false);
  const [isProfilePressed, setProfilePressed] = useState(false);
  const [isFillingIconPressed, setFillingIconPressed] = useState(false); 

  return (
    <>
      <IconRegistry icons={EvaIconsPack} /> 
      <StyledView className="flex-1 justify-start items-center space-y-4 pt-2.5">
        
        {/* Menu Button */}
        <StyledPressable
          className={`items-center justify-center w-20 h-20 rounded-full ${isMenuPressed ? 'bg-gray-400' : 'bg-white'}`}
          onPressIn={() => setMenuPressed(true)}
          onPressOut={() => setMenuPressed(false)}
          onPress={() => console.log('Menu icon pressed!')}
          style={{
            borderWidth: 1,
            borderColor: '#D1D1D1', 
          }}
        >
          <Icon name="menu-outline" fill="black" width={32} height={32} />
        </StyledPressable>

        {/* Home Button */}
        <StyledPressable
          className={`items-center justify-center w-20 h-20 rounded-full ${isHomePressed ? 'bg-gray-400' : 'bg-white'}`}
          onPressIn={() => setHomePressed(true)}
          onPressOut={() => setHomePressed(false)}
          onPress={() => console.log('Home icon pressed!')}
          style={{
            borderWidth: 1,
            borderColor: '#D1D1D1',
          }}
        >
          <Icon name="home-outline" fill="black" width={32} height={32} />
        </StyledPressable>

        {/* Photo Button */}
        <StyledPressable
          className={`items-center justify-center w-20 h-20 rounded-full ${isPhotoPressed ? 'bg-gray-400' : 'bg-white'}`}
          onPressIn={() => setPhotoPressed(true)}
          onPressOut={() => setPhotoPressed(false)}
          onPress={() => console.log('Photo icon pressed!')}
          style={{
            borderWidth: 1,
            borderColor: '#D1D1D1',
          }}
        >
          <Icon name="camera-outline" fill="black" width={32} height={32} />
        </StyledPressable>

        {/* Profile Button */}
        <StyledPressable
          className={`items-center justify-center w-20 h-20 rounded-full ${isProfilePressed ? 'bg-gray-400' : 'bg-white'}`}
          onPressIn={() => setProfilePressed(true)}
          onPressOut={() => setProfilePressed(false)}
          onPress={() => console.log('Profile icon pressed!')}
          style={{
            borderWidth: 1,
            borderColor: '#D1D1D1',
          }}
        >
          <Icon name="person-outline" fill="black" width={32} height={32} />
        </StyledPressable>

        {/* Filling Form Button */}
        <StyledPressable
          className={`items-center justify-center w-20 h-20 rounded-full ${isFillingIconPressed ? 'bg-gray-400' : 'bg-white'}`}
          onPressIn={() => setFillingIconPressed(true)}
          onPressOut={() => setFillingIconPressed(false)}
          onPress={() => console.log('Filling icon pressed!')}
          style={{
            borderWidth: 1,
            borderColor: '#D1D1D1',
          }}
        >
          <Icon name="edit-2-outline" fill="black" width={32} height={32} />
        </StyledPressable>

      </StyledView>
    </>
  );
}
