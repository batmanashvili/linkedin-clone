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
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            {/* Header */}
            <StickyPostHeader />

            <Avatar width={50} height={50} style={{ 
                top: 90
            }} />

            {/* DropDown Options */}

            {/* <View style={Styles.DropDownMenuWrapper}> */}
                <View style={Styles.DropDown} ></View>
            {/* </View> */}

            {/* Input PlaceHolder */}
            <View style={Styles.PostArea}>
                <TextInput
                placeholder="What Do You Want To Talk About?"
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
        marginVertical: '17.5%',
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    Input: {
        width: "100%",
        minHeight: '10%',
        marginTop: 70,
        fontSize: 18,
        fontWeight: '600',
    },
    
    DropDown: {
        width: 100,
        height: 40,
        borderColor: 'red',
        borderWidth: 1,
    }
})
