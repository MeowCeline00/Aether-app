import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

interface CardProps {
  title: string;
  description?: string;
}

export default function Card({ title, description }: CardProps) {
  return (
    <StyledView className="p-4 bg-white rounded-lg shadow-md mb-4">
      <StyledText className="text-lg font-semibold">{title}</StyledText>
      {description && <StyledText className="text-sm text-gray-500">{description}</StyledText>}
    </StyledView>
  );
}
