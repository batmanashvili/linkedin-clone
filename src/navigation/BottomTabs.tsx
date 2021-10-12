import React from 'react'
import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs"
import { BottomTabsTypes } from './Types/BottomTabsTypes'

import { HomeScreen } from '../screens/HomeScreen'
import { MyNetworkScreen } from '../screens/MyNetworkScreen';
import { PostScreen } from '../screens/PostScreen';
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { JobsScreen } from '../screens/JobsScreen';

// Icons
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';


const Tabs = createBottomTabNavigator<BottomTabsTypes>()

export const BottomTabs = () => {
    return (
        <Tabs.Navigator 
        >
            <Tabs.Screen options={{
                tabBarIcon: () => (
                    <Entypo name="home" size={20} color="#8C8C8C" />
                )
            }} name="Home" component={HomeScreen} />
            <Tabs.Screen  options={{
                tabBarIcon: () => (
                    <FontAwesome5 name="user-friends" size={20} color="#8C8C8C" />
                )
            }} name="My Network" component={MyNetworkScreen} />
            <Tabs.Screen  options={{
                tabBarIcon: () => (
                    <AntDesign name="plussquare" size={20} color="#8C8C8C" />
                )
            }} name="Post" component={PostScreen} />
            <Tabs.Screen  options={{
                tabBarIcon: () => (
                    <Ionicons name="notifications" size={20} color="#8C8C8C" />
                )
            }} name="Notifications" component={NotificationsScreen} />
            <Tabs.Screen  options={{
                tabBarIcon: () => (
                    <Foundation name="shopping-bag" size={20} color="#8C8C8C" />
                )
            }} name="Jobs" component={JobsScreen} />
        </Tabs.Navigator>
    )
}

// headerShown: false