import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { globalScreens } from './screens';


const Global = () => {
    console.log(globalScreens, "global screens")
    const Stack = createNativeStackNavigator();

    let getInitialRoute = () => {
        return 'NewsFeed';
    };

    let getScreens = (screen: any) => {
        let props = {
            ...screen,
        };

        return <Stack.Screen {...props} />;
    };
    let screens = new Array();

    screens?.push(globalScreens?.map((screen): any => getScreens(screen)));

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
