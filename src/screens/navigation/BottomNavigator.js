import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MainStackNavigator } from './StackNavigator';

import SettingScreen from '../SettingScreen';
import DetailScreen from '../DetailScreen';

const stackName = 'Art Journal';
const detailName = 'Details';
const settingName = 'Settings';


const Tab = createBottomTabNavigator();

export default function BottomContainer(){
    return (
            <Tab.Navigator 
                initialRouteName={stackName}
                screenOptions={({route}) =>({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;
                        if (rn === stackName) {
                            iconName = focused? 'home' : 'home-outline'
                        }else if (rn === detailName){
                            iconName = focused? 'list' : 'list-outline'
                        }else if (rn === settingName){
                            iconName = focused? 'settings' : 'settings-outline'
                        }
                        return <Ionicons name={iconName} size={size} color ={color} />
                    },
                    tabBarActiveTintColor: '#7a16b8',
                    tabBarInactiveTintColor: 'grey',
                    tabBarLabelStyle: {paddingBottom: 10, fontSize:10},
                    tabBarStyle: {padding:10, height:100}

                })}>
                <Tab.Screen name={stackName} component={MainStackNavigator}/>
                <Tab.Screen name={settingName} component={SettingScreen}/>
                <Tab.Screen name={detailName} component={DetailScreen}/>
            </Tab.Navigator>
        
    )
}
