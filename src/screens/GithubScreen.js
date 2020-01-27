import React from 'react';
import { WebView } from 'react-native-webview'


export default function GithubScreen({navigation}) {

  const link = navigation.getParam('link')
  return (
    <WebView style={{flex: 1}} source={{uri :link}} />
  );
}
