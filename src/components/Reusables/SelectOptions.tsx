import React from 'react'
import { View, Text, Image, TextInput, Button, FlatList, StyleSheet } from 'react-native'

export const SelectOptions = () => {

    return (
        <View style={Styles.Wrapper}>
            <Text>Connections Only</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    Wrapper: {
        width: 170,
        height: 30,
        backgroundColor: 'red',
        position: 'absolute',
        top: 100,
        left: 50,
        borderRadius: 15
    }
})
