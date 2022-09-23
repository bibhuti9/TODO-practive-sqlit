import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { COLORS, SIZE } from '../themes/colors'
import { useNavigation } from '@react-navigation/native'

export default function ListTask({ task, selectTask }) {
    const navigation = useNavigation();
    const onPress = (item) => {
        console.log(item)
        navigation.navigate('AddAndEditTask', {
            value: item.TaskName,
            headerText: "Edit Task",
            selectTask: selectTask,
            id: item.Id,
        })
    }
    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.card} key={index}>
                <View>
                    <Text>{item.TaskName}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => onPress(item)}>
                        <Text>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={task}
            keyExtractor={(item) => item}
            renderItem={renderItem}
        />
    )
}
const styles = StyleSheet.create({
    card: {
        borderRadius: SIZE.radious,
        padding: 14,
        marginVertical: SIZE.margin1,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})