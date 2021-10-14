import React from 'react'
import { View, Text, Image, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native'

export const Card = () => {
    return (
        <TouchableOpacity style={Styles.CardWrapper}>
            
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    CardWrapper: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    }
})