import { View as RNView, Text as RNText, TouchableOpacity as RNTouchableOpacity, Image as RNImage } from 'react-native';
import MyButton from "@/components/mycustom/atom/Button";
import React from "react";
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { IconRegistry, Icon } from "@ui-kitten/components";
import { styled } from 'nativewind';

const View = styled(RNView);
const Text = styled(RNText);
const TouchableOpacity = styled(RNTouchableOpacity);
const Image = styled(RNImage);

export default function Index() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <View className="flex bg-red-500 p-4">
        <View className="flex-row justify-between items-center bg-gray-500 p-2">
          <TouchableOpacity>
            <Image
              source={require('@/images/alice002.png')}
              className="w-5 h-5 rounded-full"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon 
              name="menu-outline"
              fill="gray"
              width={24}
              height={24}
            />
          </TouchableOpacity>
        </View>
        <Text className="mt-4 text-lg">🥰 This is Aether, the simple form filling app.</Text>
        <MyButton />
      </View>
    </>
  );
}
