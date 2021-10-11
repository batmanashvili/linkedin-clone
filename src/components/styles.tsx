import {ColorList} from 'constants/colors';
import {FontVariantEnum} from 'constants/fonts';
import {FontSizeList} from 'constants/fontSizes';
import {StyleSheet} from 'react-native';

const st = StyleSheet.create({
   cardContainerStyles: {
      flex: 1,
      borderRadius: 13,
      shadowOffset: {width: 0, height: 10},
      shadowColor: '#00000019',
      shadowRadius: 4.65,
      shadowOpacity: 3,
      elevation: 20,
      backgroundColor: ColorList.White,
      padding: 24,
   },
   disabledView: {
      position: 'relative',
      display: 'none',
   },
   iconButtonContainerStyle: {
      position: 'absolute',
      bottom: 12,
      right: 12,
      height: 24,
      width: 24,
   },
   bankDataCardStyles: {
      flex: 1,
      minHeight: 190,
      padding: 24,
   },
   bankDatainnerContainerStyles: {
      flex: 1,
      padding: 24,
   },
   bankConfirmationCardSmallLabelStyles: {
      fontFamily: FontVariantEnum.Regular,
      fontWeight: '500',
      lineHeight: 13,
      fontSize: 11,
      color: ColorList.Pink,
   },
   bankConfirmationTextStyles: {
      fontFamily: FontVariantEnum.Regular,
      fontSize: 18,
      fontWeight: '500',
      lineHeight: 21,
      color: ColorList.Black,
   },
   profilePictureContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
   },
   profilePictureBackgroundStyle: {
      height: 100,
      width: 100,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
   },
   cardLabelContainerStyle: {
      marginBottom: 20,
   },
   bottomModal: {
      flex: 1,
      marginHorizontal: 8,
   },
   actionItemsContainer: {
      backgroundColor: ColorList.ActionSheetGray,
      borderRadius: 14,
   },
   actionSheetBackground: {
      justifyContent: 'flex-end',
      flex: 1,
   },
   actionSheetHeaderStyle: {
      fontFamily: FontVariantEnum.Regular,
      fontSize: 13,
      fontWeight: '600',
      lineHeight: 18,
      color: ColorList.Gray,
      marginTop: 16,
      marginBottom: 11,
      marginHorizontal: 37,
      textAlign: 'center',
   },
   actionItem: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'nowrap',
   },
   itemStyle: {
      color: ColorList.LightBlue,
      fontFamily: FontVariantEnum.Regular,
      fontSize: 20,
      lineHeight: 24,
      letterSpacing: 0.3,
      marginVertical: 16,
      flexWrap: 'nowrap',
   },
   flexOne: {
      flex: 1,
   },
   actionCancelWrapper: {
      backgroundColor: ColorList.White,
      borderRadius: 14,
      marginTop: 8,
      justifyContent: 'center',
      alignItems: 'center',
   },
   actionCancelLabel: {
      color: ColorList.LightBlue,
      fontFamily: FontVariantEnum.Regular,
      fontSize: 20,
      lineHeight: 24,
      letterSpacing: 0.3,
      marginVertical: 16,
      flexWrap: 'nowrap',
   },
   redStyle: {
      color: ColorList.Red,
   },
   separator: {
      borderBottomColor: ColorList.DarkBlack,
      borderBottomWidth: 1,
   },
   appModal: {
      flex: 1,
   },
   termsHeaderStyle: {
      fontFamily: FontVariantEnum.Regular,
      fontWeight: '600',
      fontSize: FontSizeList.MediumText,
      lineHeight: 29,
      color: ColorList.Black,
      marginTop: 12,
   },
   termsTextStyle: {
      fontFamily: FontVariantEnum.Regular,
      fontSize: FontSizeList.XSS,
      color: ColorList.ZeroBlack,
      lineHeight: 23,
   },
   termsTextContainerStyle: {
      paddingBottom: 50,
   },
   closeTermsButtonStyle: {
      marginTop: 32,
      marginBottom: 31,
   },
   acceptTermContainerStyles: {
      marginBottom: 32,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 10,
   },
   actionButtonWrapper: {
      flexWrap: 'nowrap',
   },
});

export default st;
