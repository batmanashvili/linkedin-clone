import React, { useEffect, useState } from 'react'
import { View, Text, Image, TextInput, ScrollView, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/core'
import { NavigateType } from 'navigation/Types/NavTypes'
import { AntDesign } from '@expo/vector-icons';

import { StickyHeaderSearchBar } from 'components/StickyHeaderSearchBar'
import { Card } from '../components/Reusables/Card' 
import { UserSuggestion } from '../components/Reusables/UserSuggestion';
import { SuggestedUsers } from '../Data/SuggestedUsers';
// import { SuggestedUsers } from '../Data/SuggestedUsers'
import axios from 'axios';

interface MyNetworkTypes {
    suggestionsFromCompanies: any
}

interface SuggestedUsers {
    profileName: string,
    position: string,
    company: string,
    numOfConnections: string
}

export const MyNetworkScreen = ({ suggestionsFromCompanies }: MyNetworkTypes) => {

    // Instead Of Any - There Must Be SuggestedUsers[] Interface

    const [ AllUsers , SetAllUsers ] = useState<any>([])
    console.log(AllUsers)
    
    const Company = "Sweeft Digital | A Making Science Company"
    const SuggestionFromCompanyString: string = `People You May Know From ${ Company }`

    useEffect(() => {
        axios.get(`https://linkedinclone-6fadc-default-rtdb.firebaseio.com//SuggestedUsers.json`)
        .then(res => SetAllUsers(res.data))
        setOptions({
            headerShown: false
        })
        // setSuggestedUsers()
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

                <View style={{backgroundColor: '#fff'}}>
                    <Text style={Styles.Header}>{ SuggestionFromCompanyString }</Text>
                </View>

                <FlatList
                    style={Styles.List}
                    data={SuggestedUsers}
                    numColumns={2}
                    keyExtractor={User => `${User.position} Math.random()*666`}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <UserSuggestion
                            profileName={item.profileName}
                            position={item.position}
                            company={item.company}
                            numOfConnections={item.numOfConnections}
                        />
                    )}
                />
        </View>
    )
}

const Styles = StyleSheet.create({
    NetworkScreen: {
        width: '100%',
        height: '100%',
        backgroundColor: '#E7E4DD',
        zIndex: 1,
        
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
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    Header: {
        maxWidth: '70%',
        textAlign: 'left',
        color: '#0C0C0C',
        fontSize: 15,
        fontWeight: '400',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    List: {
        width: '100%',
        backgroundColor: '#fff',
        alignSelf: 'center'
    }
})
