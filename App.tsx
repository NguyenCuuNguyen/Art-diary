import  React from 'react'; 
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
//import { SketchCanvasWithInteraction } from "./src/canvas-with-interactivity";
//import { SketchCanvasWithoutInteraction } from "./src/canvas-without-interactivity";

import BottomContainer from './src/screens/navigation/BottomNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './src/screens/navigation/StackNavigator';
//import HomeScreen from './src/screens/HomeScreen'
// <SafeAreaView style={styles.container}>
//   <SketchCanvasWithInteractionAndCustomization />
// </SafeAreaView>

export default function App() {
  return (
    <NavigationContainer>
      <BottomContainer/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", 
    justifyContent: "center",
  },
});