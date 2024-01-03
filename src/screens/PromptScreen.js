import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
//TODO: uniform the styles: create stylesheet => import style accordingly
export default function PromptScreen() {
    const [displayPrompt, setDisplayPrompt] = useState('');

    const handleButtonPress = () => {
        const prompt = "Draw your breath! Notice how your body changes with each breath";
        setDisplayPrompt(prompt); //{`Draw ${mood}`}
    };
    
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center", paddingRight: "100px", paddingLeft: "100px",}}>
            <Button 
                title="Generate Prompt" 
                onPress={handleButtonPress}/>
            <Text style={{ marginTop:10, marginRight:30, marginLeft:30,}}>{displayPrompt}</Text>
        </View>
    );
}


// export default function PromptScreen() {
//     const [prompt, setPrompt] = useState("Unsure");

//     const pressPrompt = () => {
//         setPrompt("Draw your breath! Notice how your body changes with each breath");
//     }
    

//     return (
//         <View>
//             <Button 
//                 title="Generate Prompt" 
//                 onPress={pressPrompt}/>
//         </View>
//     )
// }
