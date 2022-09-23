import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native'
import { commonStyle, SIZE } from '../themes/colors';

export default function Header({ leftIcon, headerText, onPress }) {
    return (
        <View style={styles.headerContainer}>
            <Image source={leftIcon} style={styles.headerLeftIconStyle} />
            <View style={styles.headerTextContainerStyle}>
                <Text style={commonStyle.textStyle}>{headerText}</Text>
            </View>
            <Text style={styles.headerLeftIconStyle}></Text>
        </View>
    )
}
const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        margin: SIZE.margin1
    },
    headerLeftIconStyle: {
        ...commonStyle.iconStyle,
    },
    headerTextContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})