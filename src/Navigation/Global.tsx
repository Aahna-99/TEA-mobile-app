import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {
    createContext,
    useState,
} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationRef } from '../utils/navigation/NavigationRef';
import { globalScreens } from './screens';
export const LoaderContext = createContext({
    showLoader: () => {},
    hideLoader: () => {},
});

const Global = () => {
    const [loading, setLoading] = useState(false);

    console.log(globalScreens, "global screens")
    const Stack = createNativeStackNavigator();
    const showLoader = () => setLoading(true);
    const hideLoader = () => setLoading(false);


    let getInitialRoute = () => {
        return 'HomeNav';
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
             <LoaderContext.Provider value={{ showLoader, hideLoader }}>
            <NavigationContainer ref={NavigationRef} >
                <Stack.Navigator initialRouteName={getInitialRoute()}> 
                    {screens}
                </Stack.Navigator>
            </NavigationContainer>
            </LoaderContext.Provider>
        </SafeAreaProvider>
    );
};

export default Global;
