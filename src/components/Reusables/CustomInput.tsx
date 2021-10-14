import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, Button, FlatList, StyleSheet } from 'react-native'

// Icons
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

interface CustomInputTypes {
    PlaceHolder?: string
}

export const CustomInput = ({ PlaceHolder }: CustomInputTypes) => {

    const [ Text, setText ] = useState<string>("")

    return (
        <View >
            <TextInput 
                style={Styles.InputStyles}
                value={Text}
                placeholder={PlaceHolder}
                onChangeText={ ( TypedText : string ) => setText( TypedText )}
             />
             {/* Absolute Positioned Icons */}

             <TouchableOpacity style={Styles.SearchIcon}>
                <FontAwesome  name="search" size={20} color="#616267" />
             </TouchableOpacity>

             <TouchableOpacity style={Styles.QrIcon}>
                <MaterialIcons  name="qr-code-2" size={28} color="#616267" />
             </TouchableOpacity>


        </View>
    )
}

const Styles = StyleSheet.create({
    InputStyles: {
        width: '70%',
        height: 35,
        borderRadius: 5,
        // #EEF1F6
        backgroundColor: "#EEF1F6",
        paddingVertical: 5,
        paddingHorizontal: 40,
        fontSize: 15,
        top: 5,
        left: 70
    },
    SearchIcon: {
        top: 11,
        position: 'absolute',
        left: 80
    },
    QrIcon : {
        position: 'absolute',
        top: 8,
        right: 65
    }
})