import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { Screen } from "../../../uikit";
import { ICONS } from '../../../utils/models/IconsType';
import constColors from 'utils/constants/constColors';

export const DirectoryScreen = () => {
    const renderContent = () => {
        console.log('sdjfks')
    }
    return(
        <Screen
        mode={2}
        title={ 'Directory'}

        paddingBottom={false}
        paddingTop={false}
    />
    )
}