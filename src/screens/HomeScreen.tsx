import React, { useEffect } from 'react'
import { View, Text, Image, TextInput, Button, FlatList, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/core'
import { NavigateType } from 'navigation/Types/NavTypes'

import { StickyHeaderSearchBar } from 'components/StickyHeaderSearchBar'
import { AntDesign } from '@expo/vector-icons';

export const HomeScreen = () => {

    const { navigate, setOptions }:NavigateType | any  = useNavigation()
    const { name } = useRoute()

    useEffect(() => {

        setOptions({
            headerShown: false
        })
    }, [])

    return (
        <View>
           <StickyHeaderSearchBar />

        </View>
    )
}
