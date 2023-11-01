import { StatusBar } from 'expo-status-bar';
import React, { SafeAreaView, StyleSheet, Text, View, useState } from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler"

export default function App() {
  // useState returns a tuple: (1st param, 2nd param) <- 1st param is tGestureX - current state of the gesture and 2nd param setTGestureX is the method to update the gesture's state
  const [tGestureStart, setTGestureStart] = useState<undefined | string>();
  const [tGestureMove, setTGestureMove] = useState<undefined | string>();
  const [tGestureUpdate, setTGestureUpdate] = useState<undefined | string>();
  const [tGestureEnd, setTGestureEnd] = useState<undefined | string>();

  const pan = Gesture.Pan()
    .onStart((g)=> {
      setTGestureStart(`${Math.round(g.x)}, ${Math.round(g.y)}`);
    })
    .onTouchesMove((g)=>{
      setTGestureMove(
        `${Math.round(g.changedTouches[0].x)}, ${Math.round(g.changedTouches[0].y)}`
      );
    })
    .onUpdate((g)=>{
      setTGestureUpdate(`${Math.round(g.x)}, ${Math.round(g.y)}`);
    })
    .onEnd((g)=>{
      setTGestureEnd(`${Math.round(g.x)}, ${Math.round(g.y)}`);
    });
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* GestureDetector creating and updating native gesture handlers based on the config of provided gesture. */}
      <GestureDetector gesture={pan}>
        <SafeAreaView style={{ flex: 1, backgroundColor:"black" }}>
          <Text
            style={{ color:"white", fontSize:24}}          
          >{`Gesture started at: ${tGestureStart}`}</Text>
          <Text style={{ color:"white", fontSize:24}} >
          {`Gesture moved to: ${tGestureMove}`}
          </Text>
          <Text style={{ color:"white", fontSize:24}} >
          {`Gesture updated to: ${tGestureUpdate}`}
          </Text>
          <Text style={{ color:"white", fontSize:24}} >
          {`Gesture ended at: ${tGestureEnd}`}
          </Text>

        </SafeAreaView>
      </GestureDetector>
    </GestureHandlerRootView>
  );  
 
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



//COULDN'T RUN THE CODE BECAUSE OF Unable to resolve "react-native-reanimated/lib/typescript/Animated" from "App.js"
// import { StyleSheet } from 'react-native';
// import { GestureDetector } from 'react-native-gesture-handler';
// import Animated from 'react-native-reanimated'
// import {
//   useSharedValue,
//   useAnimatedStyle,
//   withSpring,
// } from 'react-native-reanimated'
// import { View } from 'react-native-reanimated/lib/typescript/Animated';
// import { AnimatedView } from 'react-native-reanimated/lib/typescript/reanimated2/component/View';



// // Writing Ball component

// // Define shared values to keep track of ball's position & create animated styles to position ball on screen
// function Ball() {
//   const isPressed = useSharedValue(false);
//   const offset = useSharedValue({x:0, y:0});
//   const animatedStyles = useAnimatedStyle(()=>{
//     return {
//       transform: [
//         { translateX: offset.value.x},
//         { translateY: offset.value.y},
//         { scale: withSpring(isPressed.value? 1.2:1)},
//       ],
//       backgroundColor: isPressed.value? 'yellow': 'blue',
//     };
//   });

//   //define pan gesture and assign it to detecBalltor
//   const start = useSharedValue({x:0, y:0});
//   const gesture = Gesture.Pan()
//     .onBegin(()=>{
//       isPressed.value = true;
//     })
//     .onUpdate((e)=>{
//       offset.value = {
//         x: e.translationX + start.value.x,
//         y: e.translationY + start.value.y,
//       };
//     })
//     .onEnd(()=>{
//       start.value = {
//         x:offset.value.x,
//         y:offset.value.y,
//       };
//     })
//     .onFinalize(()=> {
//       isPressed.value = false;
//     });
//   //And add it to the ball's styles:
//   return (
//     <GestureDetector gesture={gesture}>
//       <AnimatedView style={[styles.ball, animatedStyles]}/>
//     </GestureDetector>
//   );
// }

// export default function App(){
//   return (
//     <View style={styles.container}>
//       <Ball />
//     </View>
//   );
// }


// // Define styles
// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//   },
  
//   ball: {
//     width: 100,
//     height: 100,
//     borderRadius: 100,
//     backgroundColor: 'blue',
//     alignSelf: 'center',
//   },
// });



// import { Canvas, Path, Skia } from "@shopify/react-native-skia";
// import React from "react";
// import { AppRegistry, StyleSheet } from "react-native";

// //AppRegistry.registerComponent('main', () => App);
// // copied from https://shopify.github.io/react-native-skia/docs/shapes/path#using-path-object
// const path = Skia.Path.Make();
// path.moveTo(128, 0);
// path.lineTo(168, 80);
// path.lineTo(256, 93);
// path.lineTo(192, 155);
// path.lineTo(207, 244);
// path.lineTo(128, 202);
// path.lineTo(49, 244);
// path.lineTo(64, 155);
// path.lineTo(0, 93);
// path.lineTo(88, 80);
// path.lineTo(128, 0);
// path.close();

// const App = () => {
//   return (
//     <Canvas style={style.container}>
//       <Path path={path} color={"black"} style={"stroke"} strokeWidth={2} />
//     </Canvas>
//   );
// };

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: "100%",
//   }
// });

// export default App;