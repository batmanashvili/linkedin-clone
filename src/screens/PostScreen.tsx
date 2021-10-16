import React, { useEffect } from 'react'
import { View, Text, Image, TextInput, Button, FlatList, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/core'
import { NavigateType } from 'navigation/Types/NavTypes'

import { StickyPostHeader } from 'components/Reusables/StickyPostHeader';

export const PostScreen = () => {

    const { navigate, setOptions  }:NavigateType | any  = useNavigation()

    useEffect(() => {
        setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <View>
            <StickyPostHeader />
        </View>
    )
}
