import {
    Canvas,
    Path,
    SkPath,
    Skia,
    TouchInfo,
    useTouchHandler,
  } from "@shopify/react-native-skia";
  import React, { useCallback, useState } from "react";
  import { StyleSheet } from "react-native";
  
  export const SketchCanvasWithInteractionAndCustomization = () => {
    //paths hold all the lines that the user adds.
    const [paths, setPaths] = useState<SkPath[]>([]);
    
    //create a new path that starts at the XY coordinates that the user started pressing at and add it to the paths state. 
    //If the user lifts there finger and puts it down again, the onStart method is called again, adding another path to the state.
    const onDrawingStart = useCallback((touchInfo: TouchInfo) => {
      setPaths((old) => {
        const { x, y } = touchInfo;
        const newPath = Skia.Path.Make();
        newPath.moveTo(x, y);
        return [...old, newPath];
      });
    }, []);
    //called when the user starts moving their finger
    //add lines to the last path in our component using the quadTo method on the path object.
    const onDrawingActive = useCallback((touchInfo: TouchInfo) => {
      setPaths((currentPaths) => {
        const { x, y } = touchInfo;
        const currentPath = currentPaths[currentPaths.length - 1];
        const lastPoint = currentPath.getLastPt();
        const xMid = (lastPoint.x + x) / 2;
        const yMid = (lastPoint.y + y) / 2;
  
        currentPath.quadTo(lastPoint.x, lastPoint.y, xMid, yMid);
        return [...currentPaths.slice(0, currentPaths.length - 1), currentPath];
      });
    }, []);
    // for the component to detect when a user is interacting with it. takes an object that has three callbacks on it: onStart, onActive, and onEnd
    //onStart is called when the user first presses on the component
    const touchHandler = useTouchHandler(
      {
        onActive: onDrawingActive,
        onStart: onDrawingStart,
      },
      [onDrawingActive, onDrawingStart]
    );

    //pass the return value of the useTouchHandler to the prop onTouch on the <Canvas /> element.
    return (
        //Loop over the paths in our state array and render them using the <Path /> component.
      <Canvas style={style.container} onTouch={touchHandler}>
        {paths.map((path, index) => (
          <Path
            key={index}
            path={path}
            color={"black"}
            style={"stroke"}
            strokeWidth={2}
          />
        ))}
      </Canvas>
    );
  };
  
  const style = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
    },
  });