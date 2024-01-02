import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from '../HomeScreen';
import DrawScreen from "../DrawScreen";

const Stack = createStackNavigator();

//TOFIX: once enter draw, need to exit bottom stack. Once back to home, need to re-eneter stack.
export const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Draw" component={DrawScreen} />
    </Stack.Navigator>
  );
}

