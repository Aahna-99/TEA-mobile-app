import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Portal } from "react-native-paper";
import { HomeScreen } from "../modules/Home";
import { NewsFeed } from "../modules/NewsFeed";
import TabBar from './TabBar'; // Adjust import path as necessary
import { SafeAreaView } from "react-native-safe-area-context";

export const StackMore = createStackNavigator();
export const Tab = createBottomTabNavigator();
export const Nav = () => {
    return (
        <>

            {/* <SafeAreaView style={{flex:0}}>
                <SafeAreaView style={{flex: 1, position: 'relative'}}> */}  
                {/* <Tab.Navigator screenOptions={{ headerShown: false }}></Tab.Navigator> */}
            <Portal.Host>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarActiveTintColor: '#0166DB',
                        tabBarInactiveTintColor: '#201A1B',
                        // headerShown: false
                    })}
                    tabBar={props => <TabBar {...props} />}
                >
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Newsfeed" component={NewsFeed} />
                    <Tab.Screen name="Calendar" component={NewsFeed} />
                    <Tab.Screen name="Alerts" component={NewsFeed} />
                    <Tab.Screen name="More" component={NewsFeed} />
                </Tab.Navigator>
            </Portal.Host>
            {/* </SafeAreaView>
                </SafeAreaView> */}

        </>
    );
}