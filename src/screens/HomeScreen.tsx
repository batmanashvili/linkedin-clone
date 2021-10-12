import React, { useEffect } from 'react'
import { View, Text, Image, TextInput, Button, FlatList, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/core'
import { NavigateType } from 'navigation/Types/NavTypes'

export const HomeScreen = () => {

    const { navigate, setOptions  }:NavigateType | any  = useNavigation()
    const { name } = useRoute()

    useEffect(() => {
        setOptions({
            headerTitle: () => null
        })
    }, [])

    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    )
}
