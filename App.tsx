/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {LogBox, SafeAreaView} from 'react-native';

import MainNav from './src/navigation';
import {AlertNotificationRoot} from 'react-native-alert-notification';
const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <SafeAreaView style={{flex: 1}}>
       <AlertNotificationRoot>
      <MainNav />
      </AlertNotificationRoot>
    </SafeAreaView>
  );
};

export default App;
