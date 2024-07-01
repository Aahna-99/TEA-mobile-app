import React, { useEffect, useRef, useState } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import VectorIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Animated, TextInput, TouchableOpacity, View, View as RNView } from 'react-native';
import constColors from '../utils/constants/constColors';
import Text from '../uikit/Text'
import styles from './styles'
import HomeIcon from '../assets/Drawables/HomeIcon.svg'
import Calender from '../assets/Drawables/Calender.svg'
import NewsFeed from '../assets/Drawables/NewsFeed.svg'
import Alerts from '../assets/Drawables/Alerts.svg'
import More from '../assets/Drawables/More.svg'
import HomeSelectedIcon from '../assets/Drawables/HomeSelectedIcon.svg'
import CalenderSelectedIcon from '../assets/Drawables/CalenderSelectedIcon.svg'
import MoreSelectedIcon from '../assets/Drawables/MoreSelectedIcon.svg'
import AlertsSelectedIcon from '../assets/Drawables/AlertsSelectedIcon.svg'
import NewsFeedSelectedIcon from '../assets/Drawables/NewsFeedSelectedIcon.svg'
const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {

    const [selectedValue,setSelectedValue] = useState('Home')

    const tabBarIcon = ({ route, color, size }: { route: any; color: string; size: number }) => {
        let IconComponent;

        switch (route.name) {
            case 'Home':
                IconComponent = selectedValue === 'Home' ? HomeSelectedIcon : HomeIcon;
                break;
            case 'Calendar':
                IconComponent = selectedValue === 'Calendar' ?  CalenderSelectedIcon  :  Calender;
                break;
            case 'Alerts':
                IconComponent = selectedValue === 'Alerts' ? AlertsSelectedIcon : Alerts;
                break;
            case 'Newsfeed':
                IconComponent = selectedValue === 'Newsfeed' ? NewsFeedSelectedIcon :  NewsFeed;
                break;
            case 'More':
                IconComponent = selectedValue === 'More' ?  MoreSelectedIcon : More;
                break;
            default:
                IconComponent = HomeIcon;
                break;
        }

        return <IconComponent width={size} height={size} fill={color} />;

        // const IconComponent = route.name === 'Alerts' ? VectorIcon : Icon;

        // return <IconComponent name={iconName} size={size} color={color} />;
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
    const selectedOption = (option) => {
        navigation.navigate(option)
        setSelectedValue(option)

    }
    return (
        <View style={styles.navMainView}>
            <Animated.View
                style={[animStyle, styles.safeAreaViewStyle]}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

                    return (
                        <TouchableOpacity
                            key={route.key}
                            accessibilityRole="button"
                            onPress={() => selectedOption(route.name)}
                            style={styles.segment}
                        >
                            {icon(route, index)}
                            {text(label, index)}
                        </TouchableOpacity>
                    );
                })}
            </Animated.View>
        </View>
    );
};

export default TabBar