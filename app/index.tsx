import React, { useState } from "react";
import { View, Image, TextInput, Text, Pressable } from "react-native";
import { styled } from "nativewind";
import { useRouter } from "expo-router";

const StyledView = styled(View);
const StyledTextInput = styled(TextInput);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);
const StyledImage = styled(Image);

export default function HomePage() {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const router = useRouter();
  const handleLogIn = () => {
    router.push({pathname:"/homePage", params:{username}})
  }

  return (
    <StyledView className="flex-1 bg-white justify-between">
      <StyledView className="items-center mt-12">
        <StyledImage
          source={require("@/images/aether_logo.png")}
          className="w-25 h-27"
        />
      </StyledView>
      <StyledView className="w-full h-2/3 bg-gray-300 rounded-t-3xl p-8 items-center">
        <StyledTextInput
          placeholder="username"
          value={username}
          onChangeText={setUserName}
          className="w-4/5 h-12 rounded-full bg-white px-4 mb-4"
        ></StyledTextInput>
        <StyledTextInput
          placeholder="password"
          value={password}
          onChangeText={setPassWord}
          className="w-4/5 h-12 rounded-full bg-white px-4 mb-4"
        ></StyledTextInput>
        <StyledPressable className="w-2/5 h-12 rounded-full bg-gray-400 justify-center items-center mb-4" onPress={handleLogIn}>
          <StyledText className="text-lg">log in</StyledText>
        </StyledPressable>
        <StyledPressable>
          <StyledText>Continue as guest</StyledText>
        </StyledPressable>
        <StyledPressable onPress={() => router.push("/register")}>
          <StyledText>
            Don't have an account?{" "}
            <StyledText className="font-bold underline">Create one</StyledText>
          </StyledText>
        </StyledPressable>
      </StyledView>
    </StyledView>
  );
}
