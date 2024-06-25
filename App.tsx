/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import "react-native-devsettings";
import { InitialContainer } from './InitialContainer';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/processors/store';
 
 
function App(): React.JSX.Element {

  return (
    // <View>
    //   <Text>
    //     hello world
    //   </Text>
    // </View>
    <Provider store={store}>
      <InitialContainer />
   </Provider>
  );
}



export default App;
