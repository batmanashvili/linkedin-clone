import React, { useEffect } from 'react'
import { View, Text, Image, TextInput, Button, FlatList, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/core'
import { NavigateType } from 'navigation/Types/NavTypes'
import { Avatar } from '../components/Reusables/Avatar'

import { StickyPostHeader } from '../components/Reusables/StickyPostHeader';
import { SelectOptions } from '../components/Reusables/SelectOptions'

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
            <Avatar width={50} height={50} style={{ 
                top: 90
             }} />
            <View style={Styles.PostArea}>
                <TextInput
                numberOfLines={30}
                    style={Styles.Input}
                />
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    PostArea: {
        width: '100%',
        height: '60%',
        marginVertical: '17.5%'
    },
    Input: {
        width: "100%",
        height: '100%',
        fontSize: 23
    }
})
