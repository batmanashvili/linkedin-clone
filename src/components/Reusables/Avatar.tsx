import React from 'react'
import { View, Text, Image, TextInput, Button, FlatList, StyleSheet } from 'react-native'

interface AvatarType {
    AvatarImage?: string
}

export const Avatar = ({ AvatarImage }: AvatarType) => {
    return (
        <View style={Styles.AvatarWrapper}>

            {/* Image Can Be Stored In SqlLite Or On Firebase Database
                AnyWay, It'll Be A String
            */}

            {
                AvatarImage && <Image 
                    style={{
                        // Temporary Solution
                        backgroundColor: AvatarImage ? '#ccc' : '#EAF2FF'

                    }} source={{ uri: AvatarImage }} />
            }
            
        </View>
    )
}

const Styles = StyleSheet.create({
    AvatarWrapper: {
        width: 35,
        height: 35,
        borderRadius: 50,
        borderWidth: 1,
        position:'absolute',
        top: 25,
        left: 20

    }
})