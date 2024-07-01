import React from 'react';
import { View,  TouchableOpacity, ScrollView  } from 'react-native';
import { Text, Icon,  FlatList, } from '../../../uikit';
import { ICONS } from '../../../utils/models/IconsType';
import constColors from 'utils/constants/constColors';

const QuickLinksSection = ({ title, data }) => {
    console.log(title)
    const renderItem = item => {
        let icon = (
            <View
                style={{
                    height: 55,
                    width: 55,
                    borderRadius: 24,
                    justifyContent: 'center',
                }}>
                <Icon
                    icon={ICONS[item]}
                    size={55}
                    key={Math.random()}
                />
            </View>
        );

        let text = (
            <Text
            headingType={'h6'}
            wrapperStyle={{ marginTop: 7 }}
            >
                {item}
            </Text>
        );

        return (
            <TouchableOpacity
                onPress={() => {
                    item?.onSelect?.();
                }}
                activeOpacity={item ? 1 : 0}
                style={{
                    flex: 1,
                    maxWidth: '25%', // Slightly less than 25% to account for margin
                    alignItems: 'center',
                    backgroundColor: constColors.bgWhite,
                    borderRadius: 16,
                    justifyContent: 'center',
                    elevation: 2,
                    opacity: item ? 1 : 0,
                    marginTop: 20,
                }}>
                {icon}
                {text}
            </TouchableOpacity>
        );
    };


    return (
        <View style={{ paddingHorizontal: 8, marginVertical: 20, flex: 1}}>
            <Text
              headingType={'h5'}
              fontWeight={'regular'}
                wrapperStyle={{ marginVertical: 10,marginLeft: 8, fontWeight: '600'}}
            >
                {title}
            </Text>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={data}
                renderItem={({ item }) => renderItem(item)}
                numColumns={4}
                horizontal={false}
                columnWrapperStyle={{
                    flex: 1,
                    justifyContent: 'flex-start',
                }}
            />
        </View>
    );
};

export default QuickLinksSection;
