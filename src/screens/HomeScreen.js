import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import {style} from '../themes'
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { NavigationContainer } from '@react-navigation/native';
//import { DrawScreen } from "../canvas-with-interactivity-and-customizability";
//import { createStackNavigator } from '@react-navigation/stack';
 //<Button title="Upload" onPress={}/>

//const Stack = createStackNavigator();
const drawName = 'Draw'
const promptName = 'Prompt'
export default function HomeScreen({navigation}) {
    const [displayPrompt, setDisplayPrompt] = useState('');

    const handleButtonPress = () => {
        const prompt = "Draw your breath! Notice how your body changes with each breath";
        setDisplayPrompt(prompt); //{`Draw ${mood}`}
    };
    return (
        
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text onPress={() => alert('Welcome to ArtC!')}
                style={{fontSize: 26, fontWeight: 'bold'}}
            >Home Screen</Text>
            <Button 
                title="Create" 
                onPress={() => navigation.navigate(drawName)}/>
            <Button 
                title="Not sure what to draw" 
                onPress={handleButtonPress}/>
            <Text style={{ marginTop:10, marginRight:30, marginLeft:30,}}>{displayPrompt}</Text>
        </View>
       
    )
}
