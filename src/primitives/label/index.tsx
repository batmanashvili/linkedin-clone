import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {TFunctionResult} from 'i18next';

import st from '../styles';

interface LabelProps {
   value: string | number | TFunctionResult;
   style?: StyleProp<TextStyle> | undefined;
}

const Label = (props: LabelProps) => {
   const {value = '', style = {}} = props;

   return <Text style={[st.labelStyle, style]}>{value}</Text>;
};

export default React.memo(Label);
