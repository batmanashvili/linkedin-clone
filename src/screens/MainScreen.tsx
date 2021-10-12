import React, { useEffect } from 'react'
import { View, Text, Image, TextInput, Button, FlatList, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/core'
import { RouteProp } from '@react-navigation/core'


export interface NavigateType {
    navigate: (pageName: string) => void;
    setOptions: () => void
   
}

export const MainScreen: React.FC = () => {
    
    const { navigate, setOptions  }:NavigateType | any  = useNavigation()
    const { name } = useRoute()

    useEffect(() => {
        setOptions({
            headerShown: false
        })
    } , [])
    


    const NavigationHandler = () => {
            navigate("Post")
    }

    return (
        <View>
            <Text>MainScreen</Text>

            <Button title="Go" onPress={NavigationHandler} />
        </View>
    )
}
