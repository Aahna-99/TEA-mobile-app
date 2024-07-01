import {
    TransitionSpecs,
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack';

import {
    RootStackParamList,
} from './types';

export const transition = {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
};

export const CardStyleInterpolator = CardStyleInterpolators.forHorizontalIOS;
export const Stack = createStackNavigator<RootStackParamList>();
