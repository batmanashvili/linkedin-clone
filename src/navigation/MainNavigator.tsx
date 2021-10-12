import React from 'react'
import { BottomTabs } from './BottomTabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouterTypes } from '../navigation/Types/NavTypes';

import { HomeScreen } from '../screens/HomeScreen';
import { MyNetworkScreen } from '../screens/MyNetworkScreen';
import { PostScreen } from '../screens/PostScreen';
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { JobsScreen } from '../screens/JobsScreen';


const MainNavigator = createNativeStackNavigator<RouterTypes>()

export const MainNavigation = () => {

    return(

        <NavigationContainer>

            <MainNavigator.Navigator >

                <MainNavigator.Screen options={{
                    headerShown: false
                }} name="Tab" component={BottomTabs} />

                <MainNavigator.Screen name="Home" component={HomeScreen} />

                <MainNavigator.Screen name="My Network" component={MyNetworkScreen} />
                
                <MainNavigator.Screen name="Post" component={PostScreen} />

                <MainNavigator.Screen name="Notifications" component={NotificationsScreen} />

                <MainNavigator.Screen name="Jobs" component={JobsScreen} />


            </MainNavigator.Navigator>

        </NavigationContainer>

    )
}
