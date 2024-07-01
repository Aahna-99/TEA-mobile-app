import React, { useEffect } from "react";
import { Text, View } from "react-native";
import Screen  from "../../../uikit/Screen";
export const HomeScreen = () => {

    useEffect(()=>{
        
        
    })

    const renderContent = () => {
        return (
            <View>
                <Text>
                    hello world here
                </Text>
            </View>
        )
    }
    return(
        <Screen
            mode={2}
            title={'HomeScreen'}
            renderContent={renderContent}
            // navigationAction={navigationAction}
            // actionButtons={actionButtons}
            // enableSafeArea={false}
        />

    )
}