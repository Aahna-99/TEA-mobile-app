import React from "react";
import { Text, View } from "react-native";
import { Screen } from "../../../uikit";


export const NewsFeed = () => {
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
            title={'NewsFeed'}
            renderContent={renderContent}
            // navigationAction={navigationAction}
            // actionButtons={actionButtons}
            // enableSafeArea={false}
        />

    )
}