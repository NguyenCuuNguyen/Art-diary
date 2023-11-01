import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import DetailScreen from './DetailScreen';

const homeName = 'Home';
const detailName = 'Details';
const settingName = 'Settings';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return (
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName={homeName}
                screenOptions={({route}) =>({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;
                        if (rn === homeName) {
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
                <Tab.Screen name={homeName} component={HomeScreen}/>
                <Tab.Screen name={settingName} component={SettingScreen}/>
                <Tab.Screen name={detailName} component={DetailScreen}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}
