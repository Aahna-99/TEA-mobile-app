import React, { useEffect, useRef, useState } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import VectorIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Animated, TextInput, TouchableOpacity, View, View as RNView } from 'react-native';
import constColors from '../utils/constants/constColors';
import Text from '../uikit/Text'
import styles from './styles'
const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
    const tabBarIcon = ({ route, color, size }: { route: any; color: string; size: number }) => {
        let iconName;

        switch (route.name) {
            case 'Home':
                iconName = 'home-outline';
                break;
            case 'Calendar':
                iconName = 'calendar-outline';
                break;
            case 'Alerts':
                iconName = 'bell-ring-outline';
                break;
            case 'Newsfeed':
                iconName = 'newspaper-outline';
                break;
            case 'More':
                return <AntDesign name="appstore-o" size={size} color={color} />;
            default:
                iconName = 'appstore-o';
                break;
        }

        const IconComponent = route.name === 'Alerts' ? VectorIcon : Icon;

        return <IconComponent name={iconName} size={size} color={color} />;
    };
    const anim = useRef(new Animated.Value(0)).current;

    const yVal = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 80],
        extrapolateLeft: 'clamp',
    });
    const animStyle = {
        transform: [
            {
                translateY: yVal,
            },
        ],
    };
    const icon = (route: any, index: any) => {
        return tabBarIcon({ route, color: index === state.index ? '#0166DB' : '#201A1B', size: 24 })
    }
    const text = (label: any, index: any)=>{
      return ( <Text headingType="h6" style={{ color: index === state.index ? '#0166DB' : '#201A1B', alignItems: 'center', marginTop: 3 }}>{label}</Text>)
    }
    return (
        <RNView style={styles.navMainView}>
            <Animated.View
                style={[animStyle, styles.safeAreaViewStyle]}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

                    return (
                        <TouchableOpacity
                            key={route.key}
                            accessibilityRole="button"
                            onPress={() => navigation.navigate(route.name)}
                            style={styles.segment}
                        >
                            {icon(route, index)}
                            {text(label, index)}
                        </TouchableOpacity>
                    );
                })}
            </Animated.View>
        </RNView>
    );
};

export default TabBar