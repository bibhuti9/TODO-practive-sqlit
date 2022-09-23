import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import HomeScreen from '../screens/HomeScreen';
import AddAndEditTask from '../screens/AddAndEditTask';
const Tab = createStackNavigator();
export default function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='AddAndEditTask' component={AddAndEditTask} />
        </Tab.Navigator>
    )
}