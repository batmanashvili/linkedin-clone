import React from 'react'
import { View, Text, Image, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native'
import { Avatar } from './Avatar'
import { Ionicons } from '@expo/vector-icons';
import { CustomButton } from './CustomButton';
import { AntDesign } from '@expo/vector-icons';

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

            {/* X - Exit Button */}

            <AntDesign style={Styles.XButton} name="closecircle" size={24} color="#4C5457" />

            <View style={Styles.CoverPreview}>
                {/* Cover Goes Here */}
            </View>

            <Text style={Styles.ProfileName}>{ profileName }</Text>
            <Text style={Styles.Position}>{ WorkStuff }</Text>
            <Text style={Styles.ConnectionCount}>{ ConnectionStuff }</Text>

            {/* Reusable Avatar */}

            <Avatar style={{position: 'absolute', top: 15, left: 50}} width={90} height={90} />

            <CustomButton style={{ bottom: 13, width: '80%', borderRadius: 20, backgroundColor: '#fff', borderColor: '#305CA3', borderWidth: 1.2}} title="Connect" />
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    Wrapper: {
        width: '47%',
        height: 255,
        borderRadius: 7,
        backgroundColor: '#fff',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 666,
        borderColor: '#C6D0D1',
        borderWidth: 1,
        marginLeft: 8,
        marginVertical: 10
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
        maxWidth: '85%',
        minHeight: 30,
        fontSize: 15,
        color: '#6F6F6F',
        position: 'absolute',
        top: '54%',
        textAlign: 'center',
        marginBottom: 10,
        flexWrap: 'wrap',
        writingDirection: 'rtl'
    },
    ConnectionCount: {
        fontSize: 13,
        position: 'absolute',
        color: '#6F6F6F',
        bottom: '20%'
    },
    XButton: {
        position: 'absolute',
        top: 5,
        right: 10
    }
})