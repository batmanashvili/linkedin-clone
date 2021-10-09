import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle, TextStyle} from 'react-native';
import {TFunctionResult} from 'i18next';

import {ButtonVariantEnum} from 'constants/enums';
import Label from 'primitives/label';
import ResendIcon from '@img/resendIcon.svg';

import st from '../styles';

interface ButtonProps {
   onPress: () => void;
   title: string | number | TFunctionResult;
   style?: StyleProp<ViewStyle>;
   labelStyle?: TextStyle;
   disabled?: boolean;
   variant: ButtonVariantEnum;
   activeOpacity?: number;
   buttonIcon?: () => void;
   hitSlop?: {};
}

const Button = (props: ButtonProps) => {
   const {
      title = '',
      onPress = () => {},
      style = {},
      labelStyle = {},
      disabled = false,
      variant,
      activeOpacity = 0.7,
      hitSlop = {},
   } = props;

   let buttonVariantStyle = {},
      labelVariantStyle = {};

   switch (variant) {
      case ButtonVariantEnum.Primary: {
         buttonVariantStyle = st.primaryBtn;
         labelVariantStyle = st.primaryBtnBtnLabel;
         break;
      }
      case ButtonVariantEnum.Secondary: {
         buttonVariantStyle = st.secondaryBtn;
         labelVariantStyle = st.secondaryBtnLabel;
         break;
      }
      case ButtonVariantEnum.Text: {
         buttonVariantStyle = st.textBtn;
         labelVariantStyle = st.textBtnLabel;
         break;
      }
      case ButtonVariantEnum.ResendButton: {
         buttonVariantStyle = st.resendBtn;
         labelVariantStyle = st.resendBtnLabel;
         break;
      }
   }

   return (
      <TouchableOpacity
         disabled={disabled}
         onPress={!disabled ? onPress : () => {}}
         activeOpacity={!disabled ? activeOpacity : 1}
         hitSlop={hitSlop}
         style={[
            st.buttonStyle,
            buttonVariantStyle,
            style,
            disabled && st.disabled,
         ]}>
         {variant === ButtonVariantEnum.ResendButton && (
            <ResendIcon style={st.resendIconStyle} />
         )}
         <Label
            style={[st.btnLabelStyle, labelVariantStyle, labelStyle]}
            value={title}
         />
      </TouchableOpacity>
   );
};

export default React.memo(Button);
