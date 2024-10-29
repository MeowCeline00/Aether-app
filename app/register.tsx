import React, { useState } from "react";
import { View, Image, TextInput, Text, Pressable } from "react-native";
import { styled } from "nativewind";
import { useRouter } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';

const StyledView = styled(View);
const StyledTextInput = styled(TextInput);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);
const StyledImage = styled(Image);

export default function HomePage() {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const handleLogIn = () => {
    router.push({pathname:"/homePage", params:{username}})
  }

  return (
    <LinearGradient
    colors={['#ffffff', '#c4d3ff']} 
    style={{ flex: 1 }} 
  >
    <StyledView className="flex-1 bg-white justify-between">
      <StyledView className="items-center mt-12">
        <StyledImage
          source={require("@/images/aether_logo.png")}
          className="w-25 h-27"
        />
      </StyledView>
      <StyledView className="w-full h-2/3 bg-gray-300 rounded-t-3xl p-8 items-center">
        <StyledTextInput
          placeholder="Name"
          value={username}
          onChangeText={setUserName}
          className="w-4/5 h-12 rounded-full bg-white px-4 mb-4"
        ></StyledTextInput>
        <StyledTextInput
          placeholder="Birthday"
          value={birthday}
          onChangeText={setBirthday}
          className="w-4/5 h-12 rounded-full bg-white px-4 mb-4"
        ></StyledTextInput>
        <StyledTextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          className="w-4/5 h-12 rounded-full bg-white px-4 mb-4"
        ></StyledTextInput>
        <StyledTextInput
          placeholder="password"
          value={password}
          onChangeText={setPassWord}
          className="w-4/5 h-12 rounded-full bg-white px-4 mb-4"
        ></StyledTextInput>
        <StyledPressable className="w-2/5 h-12 rounded-full bg-gray-400 justify-center items-center mb-4" onPress={handleLogIn}>
          <StyledText className="text-lg">Register</StyledText>
        </StyledPressable>
      </StyledView>
    </StyledView>
    </LinearGradient>
  );
}
