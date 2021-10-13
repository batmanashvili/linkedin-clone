import React from 'react'
import { View, SafeAreaView, Text, Image, TextInput, Button, FlatList, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Avatar } from './Reusables/Avatar'
import { CustomInput } from './Reusables/CustomInput'

export const StickyHeaderSearchBar = () => {
    return (
        <SafeAreaView style={Styles.Wrapper}>
            <Avatar />
            <CustomInput PlaceHolder="Search" />

            {/* Messages Icon */}

            <MaterialCommunityIcons style={Styles.MessagesIcon} name="message-text" size={30} color="#65686D" />
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    Wrapper: {
        width: '100%',
        height: 69,
        borderBottomColor: "#A9B0B5",
        borderBottomWidth: 1,
        position: 'relative',
        top: 0
    },
    MessagesIcon: {
        position: 'absolute',
        right: 10,
        top: 27
    }
})