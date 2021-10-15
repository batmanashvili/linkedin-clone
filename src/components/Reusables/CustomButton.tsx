import React from 'react'
import { View, Text, Image, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native'

interface CustomButtonTypes {
    style?: any,
    title: string
}

export const CustomButton = ({style, title}: CustomButtonTypes) => {
    return (
        <TouchableOpacity style={{...Styles.Wrapper, ...style }}>
            <Text style={Styles.Title}>{ title }</Text>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    Wrapper: {
        width: '90%',
        height: 30,
        backgroundColor: 'red',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    Title: {
        fontSize: 17,
        color: '#305CA3',
        fontWeight: '600',

    }
})