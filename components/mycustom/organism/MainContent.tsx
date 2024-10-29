import React from 'react';
import { View } from 'react-native';
import Header from '@/components/mycustom/molecule/Header';
import Button from "@/components/mycustom/atom/Button";
import Dialog from "@/components/mycustom/atom/Dialog";
import { Link } from 'expo-router'; 
import { styled } from 'nativewind';

const StyledView = styled(View);
type Props = {userName:any};

export default function MainContent({userName}:Props) {
  return (
    <StyledView className="flex-1 bg-white">
      <Header />
      <StyledView className="mt-4 mb-4">
        <Dialog message={userName} />
      </StyledView>
      
      <StyledView className="flex-row justify-around mt-4 mb-4">
        <Button label="Forms" onPress={() => {}} />
        <Button label="Upload File" onPress={() => {}} />
      </StyledView>

      <StyledView className="flex-2 justify-center items-center px-4 space-y-4">
        <StyledView className="h-16 w-full justify-center items-center">
          <Link href="/testPage" asChild>
            <Button
              label="Test UIs"
              onPress={() => console.log('Navigating to Test UIs page')}
            />
          </Link>
        </StyledView>

        <StyledView className="h-16 w-full bg-gray-300 rounded-lg" />
        <StyledView className="h-16 w-full bg-gray-300 rounded-lg" />
        <StyledView className="h-16 w-full bg-gray-300 rounded-lg" />
      </StyledView>
    </StyledView>
  );
}
