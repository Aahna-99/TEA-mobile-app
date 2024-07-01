import React from "react";
import { Text, View } from "react-native";
import Screen  from "../../../uikit/Screen";
export const HomeScreen = () => {
    return(
        <Screen
        mode={2}
        title={ 'Home'}

        paddingBottom={false}
        paddingTop={false}
    />
    )
}