import React from 'react'
import { View, Text, Image, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native'

interface CardTypes {
    children?: any,
    style?: string[]
}

export const Card = ({ children, style }: CardTypes) => {
    return (
        <TouchableOpacity style={Styles.CardWrapper}>
           { children }
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    CardWrapper: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        marginBottom: 8
    }
})