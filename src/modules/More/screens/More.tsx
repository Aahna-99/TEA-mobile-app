import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { Screen, FlatList, Text, Icon } from "../../../uikit";
import { ICONS } from '../../../utils/models/IconsType';
import constColors from 'utils/constants/constColors';
import MyAppsSection from "../containers/MyAppsSection";
import EngagedlyAppsSection from "../containers/EngagedlyAppsSection";
import QuickLinksSection from "../containers/QuickLinksSection";

export const More = () => {

    return (
        <Screen
            mode={2}
            title={'Integrations'}
            renderContent={() => (
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ marginBottom: 20 }}>
                        <MyAppsSection
                            title="My Apps"
                            data={['Explore', 'Directory']}
                        />
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <EngagedlyAppsSection
                            title="Engagedly Apps"
                            data={['Explore', 'Explore', 'Explore', 'Explore', 'Explore', 'Explore']}
                        />
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <QuickLinksSection
                            title="Quick Links"
                            data={['Explore', 'Explore', 'Explore', 'Explore', 'Explore', 'Explore']}
                        />
                    </View>
                </ScrollView>
            )}
            style={{backgroundColor: constColors.bgWhite}}
            paddingBottom={false}
            paddingTop={false}
        />
    );
}