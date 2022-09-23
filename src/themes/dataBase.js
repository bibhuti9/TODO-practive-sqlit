import sqlit from 'react-native-sqlite-storage';

export const db = sqlit.openDatabase(
    {
        name: 'mainDB',
        location: 'default'
    },
    () => { console.log('Databse Connected') }
);
export const createTable = () => {
    db.transaction((tx) => {
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS "
            + "Task "
            + "(Id INTEGER PRIMARY KEY AUTOINCREMENT, TaskName TEXT,isDelete BOOLEAN);"
        )
    })
}

export const addToList = async (value) => {
    await db.transaction(async (tx) => {
        await tx.executeSql(
            "INSERT INTO Task (TASKNAME,isDelete) VALUES (?,?)",
            [value, false],
            () => {
                console.log('Task Is Added');
            }
        )
    })
}

export const updateTask = (item) => {
    db.transaction((tx) => {
        tx.executeSql(
            "UPDATE Task set TASKNAME=? where Id = ?",
            [item.value, item.id],
            () => {
                console.log("Task Updated");
            }
        )
    })
}
export const taskDelete = (Id) => {

}