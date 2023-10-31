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
