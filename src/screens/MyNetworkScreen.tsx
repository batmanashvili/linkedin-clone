import React, { useEffect } from 'react'
import { View, Text, Image, TextInput, Button, FlatList, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/core'
import { NavigateType } from 'navigation/Types/NavTypes'
import { AntDesign } from '@expo/vector-icons';

import { StickyHeaderSearchBar } from 'components/StickyHeaderSearchBar'
import { Card } from '../components/Reusables/Card' 
import { UserSuggestion } from '../components/Reusables/UserSuggestion';
import { ScrollView } from 'react-native-gesture-handler';

interface MyNetworkTypes {
    suggestionsFromCompanies: any
}

export const MyNetworkScreen = ({ suggestionsFromCompanies }: MyNetworkTypes) => {
    const Company = "Sweeft Digital | A Making Science Company"
    const SuggestionFromCompanyString: string = `People You May Know From ${ Company }`

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

            {/* Suggestions List */}

            <ScrollView style={Styles.SuggListWrapper}>
                <Text style={Styles.Header}>{ SuggestionFromCompanyString }</Text>
            </ScrollView>
            {/* <UserSuggestion 
                    profileName="David Darsalia" 
                    position="Senior Go/React Developer" 
                    company="Sweeft Digital"
                    numOfConnections='666'
                /> */}
            
            
        </View>
    )
}

const Styles = StyleSheet.create({
    NetworkScreen: {
        width: '100%',
        height: '100%',
        backgroundColor: '#E7E4DD',
        zIndex: 1
    },
    CardText: {
        fontSize: 15,
        fontWeight: '700',
        color: '#1B65A8',
        marginLeft: 15
    },
    RightIcon: {
        marginRight: 15,
    },
    SuggListWrapper: {
        width: '100%',
        minHeight: '90%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignSelf: 'center',
    },
    Header: {
        maxWidth: '70%',
        textAlign: 'left',
        color: '#0C0C0C',
        fontSize: 15,
        fontWeight: '400',
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 10
    }
})
