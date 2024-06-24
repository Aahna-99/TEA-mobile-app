import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Global = () => {
  const Stack = createStackNavigator();

  let getInitialRoute = () => {
    return 'HomeNav';
};

  return (
    <SafeAreaProvider>
      {/* <LoaderContext.Provider value={{ showLoader, hideLoader }}> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName={getInitialRoute()}>
          {screens}
        </Stack.Navigator>
      </NavigationContainer>
      {/* <GlobalLoader loading={loading} /> */}
      {/* </LoaderContext.Provider> */}
    </SafeAreaProvider>
  );
};

export default Global;
