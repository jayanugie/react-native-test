import React from 'react';

import { View, StatusBar } from 'react-native';

import WebView from 'react-native-webview';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <WebView source={{uri: 'https://jayanugie.github.io/'}} />
      
    </View>
  )
}

export default App