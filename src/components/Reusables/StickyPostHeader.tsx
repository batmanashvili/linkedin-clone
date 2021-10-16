import React from 'react'
import { View, Text, Image, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

// interface PostHeaderTypes {
//     style: any
// }

export const StickyPostHeader = () => {
    return (
        <View style={Styles.Wrapper}>
            <TouchableOpacity>
                <AntDesign name="close" size={25} color="#6E6E6E" />
            </TouchableOpacity>

           <Text style={Styles.HeaderText}>Start Post</Text>

            <TouchableOpacity>
                <Text style={Styles.PostButton}>Post</Text>
            </TouchableOpacity>
        </View>
    )
}

const Styles = StyleSheet.create({
    Wrapper: {
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 20,
        height: 73,
        backgroundColor: '#fff',
        borderBottomColor: '#6E6E6E',
        borderBottomWidth: 0.2,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    HeaderText: {
        fontSize: 21,
        color: '#000',
        fontWeight: '500'
    },
    PostButton: {
        fontSize: 17,
        color: '#6E6E6E',
        fontWeight: '500'
    }
})