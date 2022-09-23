import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../common/Header';
import { back } from '../themes/icon';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZE } from '../themes/colors';
import { TextInput } from 'react-native-gesture-handler';
import { addToList, updateTask } from '../themes/dataBase';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
export default function AddAndEditTask({ route }) {
    const { value, headerText, selectTask, id } = route.params;
    const navigation = useNavigation();
    const [text, setText] = useState(value);
    const onPress = () => {
        headerText === "Add Task" ? addToList(text) : updateTask({ value: text, id: id });
        selectTask();
    }
    return (
        <View style={{ flex: 1, }}>
            <Header
                leftIcon={back}
                headerText={headerText}
                onPress={() => { navigation.goBack() }}
            />
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View>
                        <TextInput
                            value={text}
                            onChangeText={(val) => setText(val)}
                            style={styles.textInputStyle}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={onPress}
                        style={styles.addTaskButtonStyle}>
                        <Text style={{ color: COLORS.white }}>
                            Add Task
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        width: SIZE.width / 1.2,
        height: SIZE.height / 3,
        borderRadius: SIZE.radious,
        backgroundColor: COLORS.white,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputStyle: {
        width: SIZE.width / 1.4,
        borderRadius: SIZE.radious,
        paddingLeft: SIZE.padding1,
        backgroundColor: COLORS.gray1
    },
    addTaskButtonStyle: {
        marginVertical: SIZE.margin1,
        borderRadius: SIZE.radious,
        justifyContent: 'center',
        alignItems: 'center',
        padding: SIZE.padding2,
        width: SIZE.width / 1.5,
        backgroundColor: COLORS.primaryColor,
        zIndex: 1,
    }
})