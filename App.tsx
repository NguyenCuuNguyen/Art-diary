import  React from 'react'; 
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
//import { SketchCanvasWithInteraction } from "./src/canvas-with-interactivity";
//import { SketchCanvasWithoutInteraction } from "./src/canvas-without-interactivity";
import { SketchCanvasWithInteractionAndCustomization } from "./src/canvas-with-interactivity-and-customizability";
import MainContainer from './src/screens/MainContainer'

// <SafeAreaView style={styles.container}>
//   <SketchCanvasWithInteractionAndCustomization />
// </SafeAreaView>

export default function App() {
  return (
    <MainContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", 
    justifyContent: "center",
  },
});