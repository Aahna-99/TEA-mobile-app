// File path: Global.tsx

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { globalScreens, authScreens } from './screens';
import { getStorageItem } from '../utils/Storage';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthenticated } from '../processors/auth/authSlice';
import { RootState } from '../processors/store';

const Global = () => {
  const Stack = createNativeStackNavigator();
  const isAuthenticated = useSelector((state: RootState) => state.auth.access_token !== '');
  const dispatch = useDispatch();

  useEffect(() => {
    const checkToken = async () => {
      const token = getStorageItem('Token');
      if (token) {
        dispatch(setAuthenticated(true));
      } else {
        dispatch(setAuthenticated(false));
      }
    };

    checkToken();
  }, [dispatch]);

  const getScreens = (screen: any, index: any) => {
    let props = {
      ...screen,
    };

    return <Stack.Screen {...props} key={index} />;
  };

  const authScreensArray = authScreens.map((screen, index): any => getScreens(screen, index));
  const globalScreensArray = globalScreens.map((screen, index): any => getScreens(screen, index));

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={isAuthenticated ? 'HomeNav' : 'Auth'}
          screenOptions={{ headerTitle: '', headerStyle: { backgroundColor: '#0066DB' } }}
        >
          {isAuthenticated ? globalScreensArray : authScreensArray}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Global;
