import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CardStyleInterpolators } from "@react-navigation/stack";
import React, { useEffect } from "react";
import BottomTabNavigator from "./BottomTabNavigator";
import SignInScreen from "../../screens/signInScreen";
import LoginScreen from "../../screens/loginScreen";
import SignUpScreen from "../../screens/signUpScreen";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

export default function AppStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",

        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />

      <Stack.Screen name="SignIn" component={SignInScreen} />

      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
