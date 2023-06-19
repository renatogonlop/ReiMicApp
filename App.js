import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LogBox } from 'react-native';
import { Center, NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

//Navigatiors
import Main from './Navigators/Main';

// Comp


LogBox.ignoreAllLogs(true)

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Main />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};