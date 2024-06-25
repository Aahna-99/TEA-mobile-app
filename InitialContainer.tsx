import React from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import { Global } from './src/Navigation';

export const InitialContainer = () => {
    console.log('i am here')
    return(
        <MenuProvider>
            <Global/>
        </MenuProvider>
    )
}