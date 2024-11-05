import React from "react";
import { Pressable } from "react-native";
import { Icon } from "@ui-kitten/components";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

interface IconButtonProps {
  iconName: string;
  onPress: () => void;
}

export default function IconButton({ iconName, onPress }: IconButtonProps) {
  return (
    <StyledPressable onPress={onPress} className="p-2 rounded-full bg-gray-200">
      <Icon name={iconName} fill="black" width={24} height={24} />
    </StyledPressable>
  );
}
