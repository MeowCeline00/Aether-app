import React, { useState } from "react";
import { ScrollView, Pressable, View, GestureResponderEvent } from 'react-native';
import { Icon, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { styled } from 'nativewind';

interface IconButtonProps {
  iconName: string;
  isPressed: boolean;
  setPressed: React.Dispatch<React.SetStateAction<boolean>>;
  onPress: (event: GestureResponderEvent) => void;
}

const IconButton = ({ iconName, isPressed, setPressed, onPress }: IconButtonProps) => (
  <StyledPressable
    className={`items-center justify-center w-20 h-20 rounded-full ${isPressed ? 'bg-gray-400' : 'bg-white'}`}
    onPressIn={() => setPressed(true)}
    onPressOut={() => setPressed(false)}
    onPress={onPress}
    style={{
      borderWidth: 1,
      borderColor: '#D1D1D1',
    }}
  >
    <Icon name={iconName} fill="black" width={32} height={32} />
  </StyledPressable>
);

const StyledView = styled(View);
const StyledPressable = styled(Pressable);

export default function TestUIs() {
  const [isMenuPressed, setMenuPressed] = useState(false);
  const [isHomePressed, setHomePressed] = useState(false);
  const [isPhotoPressed, setPhotoPressed] = useState(false);
  const [isProfilePressed, setProfilePressed] = useState(false);
  const [isFillingIconPressed, setFillingIconPressed] = useState(false); 
  const [isFormIconPressed, setFormIconPressed] = useState(false); 
  const [isPeopleButtonPressed, setPeopleButtonPressed] = useState(false); 
  const [isBackButtonPressed, setBackButtonPressed] = useState(false);
  const [isCloseButtonPressed, setCloseButtonPressed] = useState(false);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} /> 
      
      {/* ScrollView makes the screen scrollable */}
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>

        <StyledView className="justify-start items-center space-y-4 pt-2.5">
          
          {/* Menu Button */}
          <IconButton
            iconName="menu-outline"
            isPressed={isMenuPressed}
            setPressed={setMenuPressed}
            onPress={() => console.log('Menu icon pressed!')}
          />

          {/* Home Button */}
          <IconButton
            iconName="home-outline"
            isPressed={isHomePressed}
            setPressed={setHomePressed}
            onPress={() => console.log('Home icon pressed!')}
          />

          {/* Photo Button */}
          <IconButton
            iconName="camera-outline"
            isPressed={isPhotoPressed}
            setPressed={setPhotoPressed}
            onPress={() => console.log('Photo icon pressed!')}
          />

          {/* Profile Button */}
          <IconButton
            iconName="person-outline"
            isPressed={isProfilePressed}
            setPressed={setProfilePressed}
            onPress={() => console.log('Profile icon pressed!')}
          />

          {/* Filling Form Button */}
          <IconButton
            iconName="edit-2-outline"
            isPressed={isFillingIconPressed}
            setPressed={setFillingIconPressed}
            onPress={() => console.log('Filling icon pressed!')}
          />

          {/* Form Icon Button */}
          <IconButton
            iconName="file-text-outline"
            isPressed={isFormIconPressed}
            setPressed={setFormIconPressed}
            onPress={() => console.log('Form icon pressed!')}
          />

          {/* More People Button */}
          <IconButton
            iconName="people-outline"
            isPressed={isPeopleButtonPressed}
            setPressed={setPeopleButtonPressed}
            onPress={() => console.log('People button pressed!')}
          />

          {/* Back Button */}
          <IconButton
            iconName="chevron-left-outline"
            isPressed={isBackButtonPressed}
            setPressed={setBackButtonPressed}
            onPress={() => console.log('Back button pressed!')}
          />

          {/* Close Button */}
          <IconButton
            iconName="close-outline"
            isPressed={isCloseButtonPressed}
            setPressed={setCloseButtonPressed}
            onPress={() => console.log('Close button pressed!')}
          />

          {/* Add more buttons here if needed */}
        </StyledView>
        
      </ScrollView>
    </>
  );
}
