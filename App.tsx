/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import "react-native-devsettings";
import { InitialContainer } from './InitialContainer';
import { Provider } from 'react-redux';
import { store } from './src/processors/store';

if (__DEV__) {
  require("./ReactotronConfig");
}
 
 
function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <InitialContainer />
   </Provider>
  );
}



export default App;
