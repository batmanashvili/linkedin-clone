import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, Button, FlatList, StyleSheet } from 'react-native'

interface CustomInputTypes {
    PlaceHolder?: string
}

export const CustomInput = ({ PlaceHolder }: CustomInputTypes) => {

    const [ Text, setText ] = useState<string>("")

    return (
        <TouchableOpacity >
            <TextInput 
                style={Styles.InputStyles}
                value={Text}
                onChangeText={ ( TypedText : string ) => setText( TypedText )}
             />
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    InputStyles: {
        width: '70%',
        height: 35,
        borderRadius: 5,
        backgroundColor: "#EEF1F6",
        paddingVertical: 5,
        paddingHorizontal: 3,
        top: 5,
        left: 70
    }
})