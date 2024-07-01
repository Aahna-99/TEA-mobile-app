import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Portal } from 'react-native-paper';
import { HomeScreen } from '../modules/Home';
import { NewsFeed } from '../modules/NewsFeed';
import {More} from '../modules/More'
import TabBar from './TabBar'; // Adjust import path as necessary
import { SafeAreaView } from 'react-native';
import constColors from '../utils/constants/constColors'
//import HomeIcon from '../assets/Drawables/HomeIcon.svg'
export const StackMore = createStackNavigator();
export const Tab = createBottomTabNavigator();
import styles from './styles';
export const Nav = () => {

  return (
    <>
      {/* <SafeAreaView style={{flex:0}}>
             
      {/* <Tab.Navigator screenOptions={{ headerShown: false }}></Tab.Navigator> */}
      <SafeAreaView style={styles.header} />
      <SafeAreaView style={styles.mainHeader}>
        <Portal.Host>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarActiveTintColor: '#0166DB',
              tabBarInactiveTintColor: '#201A1B',
              headerShown: false,
            })}
            tabBar={props => <TabBar {...props}/>
            }>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Newsfeed" component={NewsFeed} />
            <Tab.Screen name="Calendar" component={NewsFeed} />
            <Tab.Screen name="Alerts" component={NewsFeed} />
            <Tab.Screen name="More" component={More} />
          </Tab.Navigator>
        </Portal.Host>
      </SafeAreaView>
      {/* 
                </SafeAreaView> */}
    </>
  );
};
