import React from 'react'
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { HomeScreen } from '../screens/HomeScreen'
import { DrawerTypes } from './Types/DrawerTypes'

const Drawer = createDrawerNavigator<DrawerTypes>()

export const DrawerNavigator = () => 
{
    return (
            <Drawer.Navigator>
                <Drawer.Screen  name="Home" component={HomeScreen} />
            </Drawer.Navigator>
    )
}