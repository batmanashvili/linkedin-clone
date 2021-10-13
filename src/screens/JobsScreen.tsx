import React, { useEffect } from 'react'
import { View, Text, Image, TextInput, Button, FlatList, StyleSheet } from 'react-native'
import { NavigateType } from 'navigation/Types/NavTypes'
import { useNavigation, useRoute } from '@react-navigation/core'

export const JobsScreen = () => {

    const { setOptions }: NavigateType | any = useNavigation()

    useEffect(() => {
        setOptions({
            headerShown: false
        })
    }, [])

    return (
        <View>
            
        </View>
    )
}
