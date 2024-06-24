import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Portal } from "react-native-paper";
import { HomeScreen } from "../modules/Home";
import { NewsFeed } from "../modules/NewsFeed";

export const StackMore = createStackNavigator();
export const Tab = createBottomTabNavigator();
export const Nav = () => {

    return (
        <>
            {/* <SafeAreaView style={[styles.header, styles[orientation]]} />
            <SafeAreaView style={[styles.mainHeader, styles[orientation]]}> */}
                <Portal.Host>
                    <Tab.Navigator>
                        <Tab.Screen
                            name="HomeScreen"
                            component={HomeScreen}
                        />
                            <Tab.Screen name="NewsFeed" component={NewsFeed} />
                           
                    </Tab.Navigator>
                </Portal.Host>
            {/* </SafeAreaView> */}
        </>
    );
}