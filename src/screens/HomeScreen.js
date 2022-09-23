import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import { COLORS, commonStyle, SIZE } from '../themes/colors'
import Header from '../common/Header'
import { back, menu } from '../themes/icon'
import { db, createTable } from '../themes/dataBase'
import ListTask from '../common/ListTask';
import sqlit from 'react-native-sqlite-storage';

export default function HomeScreen() {

    const [task, setTask] = useState([])

    const selectTask = async () => {
        await db.transaction(async (tx) => {
            await tx.executeSql(
                "SELECT * FROM Task",
                [],
                (err, result) => { setTask(result.rows.raw()) }
            )
        })
    }
    useEffect(() => {
        createTable();
        selectTask();
    }, []);

    useEffect(() => {
        console.log(task)
    }, [task])

    const navigation = useNavigation();
    const addTaskNavigation = () => {
        navigation.navigate('AddAndEditTask', {
            value: "",
            headerText: "Add Task",
            selectTask: selectTask,
            id: 0,
        });
    }
    return (
        <View style={{ flex: 1 }}>
            <Header
                leftIcon={menu}
                headerText={"Home"}
                onPress={() => { }}
            />
            <View style={styles.addButtonContainer}>
                <TouchableOpacity
                    style={styles.addButtonStyle}
                    onPress={addTaskNavigation}
                >
                    <Text style={commonStyle.textStyle}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={{ margin: SIZE.margin1 }}>
                <ListTask task={task} selectTask={selectTask} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    addButtonContainer: {
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    addButtonStyle: {
        borderRadius: SIZE.radious,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        elevation: 5
    }
})