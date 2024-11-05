import React, { useState } from "react";
import { View, Image, TextInput, Text, Pressable } from "react-native";
import { styled } from "nativewind";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const StyledView = styled(View);
const StyledImage = styled(Image);
const StyledTextInput = styled(TextInput);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);

export default function HomePage() {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const router = useRouter();

  const handleLogIn = () => {
    router.push({ pathname: "/homePage", params: { username } });
  };

  const handleContinueAsGuest = () => {
    router.push({ pathname: "/homePage" });
  };

  return (
    <LinearGradient
      colors={["#88B5DF", "#ffffff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.8 }}
      style={{ flex: 1 }}
    >
      <StyledView className="flex-1 justify-center items-center p-4">
        <StyledView className="items-center mb-24 mt-12">
          <StyledImage
            source={require("@/images/aether_logo.png")}
            resizeMode="contain"
            className="w-64 h-32"
          />
        </StyledView>
        <StyledView className="w-full px-8">
          <StyledTextInput
            placeholder="Username"
            value={username}
            onChangeText={setUserName}
            className="mb-4 h-12 bg-white rounded-full px-4"
          />
          <StyledTextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassWord}
            className="mb-4 h-12 bg-white rounded-full px-4"
          />
          <StyledPressable
            className="bg-blue-500 h-12 rounded-full justify-center items-center mb-4"
            onPress={handleLogIn}
          >
            <StyledText className="text-white text-lg">Sign In</StyledText>
          </StyledPressable>
          <StyledPressable onPress={handleContinueAsGuest}>
            <StyledText className="text-center text-lg underline">
              Continue as guest
            </StyledText>
          </StyledPressable>
          <StyledPressable onPress={() => router.push("/register")}>
            <StyledText className="text-center text-sm mt-2">
              Don't have an account?{" "}
              <StyledText className="font-bold underline">Create one.</StyledText>
            </StyledText>
          </StyledPressable>
        </StyledView>
      </StyledView>
    </LinearGradient>
  );
}
