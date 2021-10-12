import React from 'react'
import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouterTypes } from 'screens/NavTypes';


const MainNavigator = createNativeStackNavigator<RouterTypes>()

export const MainNavigation = () => {
    return(
        <NavigationContainer>
            <MainNavigator.Navigator initialRouteName="Main">
                <MainNavigator.Screen name="Main" component={MainScreen} />
                <MainNavigator.Screen name="Post" component={PostScreen} />
            </MainNavigator.Navigator>
        </NavigationContainer>
    )
}
