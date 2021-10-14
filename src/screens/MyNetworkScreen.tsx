import React, { useEffect } from 'react'
import { View, Text, Image, TextInput, Button, FlatList, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/core'
import { NavigateType } from 'navigation/Types/NavTypes'
import { AntDesign } from '@expo/vector-icons';

import { StickyHeaderSearchBar } from 'components/StickyHeaderSearchBar'
import { Card } from '../components/Reusables/Card' 

export const MyNetworkScreen = () => {

    useEffect(() => {
        setOptions({
            headerShown: false
        })
    }, [])

    const { navigate, setOptions  }:NavigateType | any  = useNavigation()
    return (
        <View style={Styles.NetworkScreen}>
            <StickyHeaderSearchBar />
            <Card >
                <Text style={Styles.CardText}>Manage My Network</Text>
                <AntDesign style={Styles.RightIcon} name="right" size={24} color="#8C8C8C" />
            </Card>
            <Card >
                <Text style={Styles.CardText}>My Network</Text>
                <AntDesign style={Styles.RightIcon} name="right" size={24} color="#8C8C8C" />
            </Card>
        </View>
    )
}

const Styles = StyleSheet.create({
    NetworkScreen: {
        width: '100%',
        height: '100%',
        backgroundColor: '#E7E4DD'
    },
    CardText: {
        fontSize: 15,
        fontWeight: '700',
        color: '#1B65A8',
        marginLeft: 15
    },
    RightIcon: {
        marginRight: 15,
    }
})
