import React from 'react'
import { View, SafeAreaView, Text, Image, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { Avatar } from './Reusables/Avatar'
import { CustomInput } from './Reusables/CustomInput'

export const StickyHeaderSearchBar = () => {
   

    return (
        <SafeAreaView style={Styles.Wrapper}>
            <Avatar />
            <CustomInput PlaceHolder="Search" />

            {/* Messages Icon */}

            <TouchableOpacity style={Styles.MessagesIcon}>
                <MaterialCommunityIcons  name="message-text" size={30} color="#65686D" />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    Wrapper: {
        width: '100%',
        height: 69,
        borderBottomColor: "#A9B0B5",
        borderBottomWidth: 0.3,
        position: 'relative',
        top: 0,
        backgroundColor: '#fff'
    },
    MessagesIcon: {
        position: 'absolute',
        right: 10,
        top: 27
    }
})