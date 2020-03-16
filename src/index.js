import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import App from './App';

// import { Container } from './styles';

export default function Index() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}
