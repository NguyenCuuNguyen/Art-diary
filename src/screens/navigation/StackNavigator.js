import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from '../HomeScreen';
import DrawScreen from "../DrawScreen";

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Draw" component={DrawScreen} />
    </Stack.Navigator>
  );
}

