import * as React from 'react';
import { View, Text, Button } from 'react-native';
import {style} from '../themes'
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { NavigationContainer } from '@react-navigation/native';
//import { DrawScreen } from "../canvas-with-interactivity-and-customizability";
//import { createStackNavigator } from '@react-navigation/stack';
 //<Button title="Upload" onPress={}/>

//const Stack = createStackNavigator();
const drawName = 'Draw'
export default function HomeScreen({navigation}) {
    return (

        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text onPress={() => alert('This is Home screen!')}
                style={{fontSize: 26, fontWeight: 'bold'}}
            >Home Screen</Text>
            <Button 
                title="Create" 
                onPress={() => navigation.navigate(drawName)}/>
        </View>
       
    )
}
