import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from "../screens/HomeScreen";
import Icon from "react-native-vector-icons/FontAwesome";


const Tabs = AnimatedTabBarNavigator();
export default function BottomStack() {
    return (
        <Tabs.Navigator
            tabBarOptions={{
                activeTintColor: "#2F7C6E",
                inactiveTintColor: "#222222"
            }}
        >
            <Tabs.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name="Home"
                            size={size ? size : 24}
                            color={focused ? color : "#222222"}
                            focused={focused}
                            color={color}
                        />
                    )
                }}
            />
        </Tabs.Navigator>
    )
}