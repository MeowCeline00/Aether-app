import React from "react";
import { Pressable, Text } from "react-native";
import { styled } from "nativewind";
import { Icon } from "@ui-kitten/components";

const StyledPressable = styled(Pressable);
const StyledText = styled(Text);

interface OptionButtonProps {
  title: string;
  iconName: string;
  onPress: () => void;
}

export default function OptionButton({ title, iconName, onPress }: OptionButtonProps) {
  return (
    <StyledPressable onPress={onPress} className="flex-row items-center p-4 bg-white rounded-lg shadow-md mb-2">
      <Icon name={iconName} fill="black" width={24} height={24} />
      <StyledText className="ml-2 text-lg font-semibold">{title}</StyledText>
    </StyledPressable>
  );
}
