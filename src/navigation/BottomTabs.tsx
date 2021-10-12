import React from 'react'
import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs"
import { BottomTabsTypes } from './Types/BottomTabsTypes'

import { HomeScreen } from '../screens/HomeScreen'
import { MyNetworkScreen } from '../screens/MyNetworkScreen';
import { PostScreen } from '../screens/PostScreen';
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { JobsScreen } from '../screens/JobsScreen';

const Tabs = createBottomTabNavigator<BottomTabsTypes>()

export const BottomTabs = () => {
    return (
        <Tabs.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tabs.Screen  name="Home" component={HomeScreen} />
            <Tabs.Screen  name="My Network" component={MyNetworkScreen} />
            <Tabs.Screen  name="Post" component={PostScreen} />
            <Tabs.Screen  name="Notifications" component={NotificationsScreen} />
            <Tabs.Screen  name="Jobs" component={JobsScreen} />
        </Tabs.Navigator>
    )
}
