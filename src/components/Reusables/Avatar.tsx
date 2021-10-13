import React from 'react'
import { View, TouchableOpacity, Image, TextInput, Button, FlatList, StyleSheet } from 'react-native'
// Toggle Drawer | Open | Close
import { DrawerActions } from '@react-navigation/native'

interface AvatarType {
    AvatarImage?: string,
}

export const Avatar = ({ AvatarImage }: AvatarType) => {

    // Needs To Be Fixed
    const ToggleDrawerHandler = () => {
        console.log("D")
        DrawerActions.toggleDrawer()
    }

    return (
        <TouchableOpacity style={Styles.AvatarWrapper} onPress={ToggleDrawerHandler}>

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
            
        </TouchableOpacity>
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