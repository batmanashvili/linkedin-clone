import React, { useEffect } from 'react'
import { View, Text, Image, TextInput, Button, FlatList, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/core'
import { NavigateType } from 'navigation/Types/NavTypes'

import { StickyHeaderSearchBar } from 'components/StickyHeaderSearchBar'
import { Card } from '../components/Reusables/Card' 

export const MyNetworkScreen = () => {

    useEffect(() => {
        setOptions({
            headerShown: false
        })
    }, [])

    const { navigate, setOptions  }:NavigateType | any  = useNavigation()
    return (
        <View style={Styles.NetworkScreen}>
            <StickyHeaderSearchBar />
            <Card />
        </View>
    )
}

const Styles = StyleSheet.create({
    NetworkScreen: {
        width: '100%',
        height: '100%',
        backgroundColor: '#E7E4DD'
    }
})
