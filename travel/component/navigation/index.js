import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Icon from './Icon';
import HomeScreen from '../screens/homeScreen';
import LinkScreen from '../screens/linkScreen';
import CalendarScreen from '../screens/calendarScreen';
import MentionScreen from '../screens/mentionScreen';
import { 
    home,
    service,
    calendar,
    heart,
    pack
} from '../items/imageIcons';


const nav = createBottomTabNavigator();

const Navigation = () => {
    return(
        <nav.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: '#000',
                    height: 70
                }
            }}
        >
            <nav.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Icon source={home} focused={focused} />
                    )
                }}
            />
            <nav.Screen 
                name="Link" 
                component={LinkScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Icon source={service} focused={focused} />
                    ),
                    unmountOnBlur: true 
                }}
            />
            <nav.Screen 
                name="Calendar" 
                component={CalendarScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Icon source={pack} focused={focused} />
                    )
                }}
            />
            <nav.Screen 
                name="Mention" 
                component={MentionScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Icon source={heart} focused={focused} />
                    )
                }}
            />
        </nav.Navigator>
    )
}


export default Navigation;
