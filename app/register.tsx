import React, { useState } from "react";
import { View, Image, TextInput, Text, Pressable } from "react-native";
import { styled } from "nativewind";
import { useRouter } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import axios from "axios";

const StyledView = styled(View);
const StyledImage = styled(Image);
const StyledTextInput = styled(TextInput);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleRegister = () => {
    const userData = {
      username: username,
      useremail: email,
      userpassword: password,
    };
    axios.post("http://10.0.0.120:5001/register", userData)
      .then((res) => {
        console.log(res.data);
        router.push({ pathname: "/homePage", params: { username } });
      })
      .catch((error) => {
        console.log("error from register", error);
      });
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
            onChangeText={setUsername}
            className="mb-4 h-12 bg-white rounded-full px-4"
          />
          <StyledTextInput
            placeholder="Birthday"
            value={birthday}
            onChangeText={setBirthday}
            className="mb-4 h-12 bg-white rounded-full px-4"
          />
          <StyledTextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            className="mb-4 h-12 bg-white rounded-full px-4"
          />
          <StyledTextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            className="mb-4 h-12 bg-white rounded-full px-4"
          />
          <StyledPressable
            className="bg-blue-500 h-12 rounded-full justify-center items-center mb-4"
            onPress={handleRegister}
          >
            <StyledText className="text-white text-lg">Register</StyledText>
          </StyledPressable>
        </StyledView>
      </StyledView>
    </LinearGradient>
  );
}
