import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {registerRootComponent} from 'expo';
import { MainNavigation } from './navigation/MainNavigator';

import {Text, View, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function App() {
   return (
      <MainNavigation />
   );
}


export default registerRootComponent(App);
