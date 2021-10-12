import React from 'react'
import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs"
import { BottomTabsTypes } from './Types/BottomTabsTypes'

import { HomeScreen } from '../screens/HomeScreen'

const Tabs = createBottomTabNavigator<BottomTabsTypes>()

export const BottomTabs = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={HomeScreen} />
        </Tabs.Navigator>
    )
}
