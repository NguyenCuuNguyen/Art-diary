import * as React from 'react';
// import { View, Text } from 'react-native';
import {styles} from '../themes';
import { SafeAreaView } from "react-native";
import { SketchCanvasWithInteractionAndCustomization } from '../canvas-with-interactivity-and-customizability';
export default function DrawScreen() {
    return (
        <SketchCanvasWithInteractionAndCustomization />
    )
}
//<SafeAreaView >
//style={styles.container}
// </SafeAreaView>