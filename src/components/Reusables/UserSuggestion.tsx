import React from 'react'
import { View, Text, Image, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native'
import { Avatar } from './Avatar'
import { Ionicons } from '@expo/vector-icons';
import { CustomButton } from './CustomButton';

interface UserSuggestionTypes {
    profileName: string,
    position: string,
    company: string,
    numOfConnections: string,
    cover?: string
}

export const UserSuggestion = ({ profileName, position, company, numOfConnections, cover }: UserSuggestionTypes) => {

    const WorkStuff = `${ position } at ${ company }`
    const ConnectionStuff = `${ numOfConnections } Mutual Connections`

    return (
        <TouchableOpacity style={Styles.Wrapper}>

            <View style={Styles.CoverPreview}>
                {/* Cover Goes Here */}
            </View>

            <Text style={Styles.ProfileName}>{ profileName }</Text>
            <Text style={Styles.Position}>{ WorkStuff }</Text>
            <Text style={Styles.ConnectionCount}>{ ConnectionStuff }</Text>

            {/* Reusable Avatar */}

            <Avatar style={{position: 'absolute', top: 15, left: 55}} width={90} height={90} />

            <CustomButton style={{ bottom: 13, width: '80%', borderRadius: 20, backgroundColor: '#fff', borderColor: '#305CA3', borderWidth: 1.2}} title="Connect" />
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    Wrapper: {
        width: '40%',
        height: 255,
        marginTop: 58,
        borderRadius: 7,
        backgroundColor: '#fff',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 666,
        borderColor: '#C6D0D1',
        borderWidth: 1,
    },
    CoverPreview: {
        width: '100%',
        height:'22.5%',
        borderRadius: 7,
        backgroundColor: 'rgba(0,0,0,.3)',
        borderColor: '#C6D0D1',
        borderWidth: 1,
    },
    ProfileName: {
        position: 'absolute',
        fontSize: 17,
        fontWeight: '600',
        top: '44%',
        color: '#161616',
    },
    Position: {
        maxWidth: '70%',
        fontSize: 15,
        color: '#6F6F6F',
        position: 'absolute',
        top: '54%',
        textAlign: 'center'
    },
    ConnectionCount: {
        fontSize: 13,
        position: 'absolute',
        color: '#6F6F6F',
        bottom: '20%'
    }
})