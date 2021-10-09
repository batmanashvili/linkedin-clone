import React from 'react';
import {
   StyleProp,
   Image,
   View,
   TextStyle,
   ImageStyle,
   TouchableOpacity,
   Insets,
} from 'react-native';

import EditProfileIcon from '@img/EditIcon.svg';
import StaticProfilePicture from '@img/ProfilePicture.svg';

import st from '../styles';

interface UserRoundedImage {
   imageUri?: string;
   style?: StyleProp<ImageStyle>;
   wrapperContainerStyle?: StyleProp<TextStyle>;
   onPress?: () => void;
   onLongPress?: () => {};
   showIcon?: boolean;
   disabled?: boolean;
   hitSlop?: Insets;
   activeOpacity?: number;
}

const UserRoundedImage = (props: UserRoundedImage) => {
   const {
      imageUri = '',
      style = {},
      wrapperContainerStyle = {},
      onPress = () => {},
      onLongPress = () => {},
      showIcon = false,
      disabled = false,
      hitSlop = {
         right: 5,
         left: 5,
         bottom: 5,
         top: 5,
      },
      activeOpacity = 0.7,
   } = props;

   const ProfilePicture = () => {
      return !!imageUri ? (
         <Image
            source={{uri: imageUri}}
            style={[st.profilePictureBackgroundStyle, style]}
         />
      ) : (
         <View style={[st.profilePictureBackgroundStyle, style]}>
            <StaticProfilePicture />
         </View>
      );
   };

   return (
      <TouchableOpacity
         onPress={!disabled ? onPress : () => {}}
         onLongPress={!disabled ? onLongPress : () => {}}
         hitSlop={hitSlop}
         activeOpacity={!disabled ? activeOpacity : 1}
         disabled={disabled}
         style={[st.profilePictureContainerStyle, wrapperContainerStyle]}>
         <ProfilePicture />
         {showIcon && (
            <View
               style={[
                  st.iconButtonContainerStyle,
                  disabled && st.disabledView,
               ]}>
               <EditProfileIcon />
            </View>
         )}
      </TouchableOpacity>
   );
};

export default React.memo(UserRoundedImage);
