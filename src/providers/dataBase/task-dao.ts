import { Observable } from '../models/Observable';
import { DailyTask } from '../dailyTask';

import { SQLiteObject } from '@ionic-native/sqlite';

export class TaskDao extends Observable {

    private dataBase: SQLiteObject;

    public setDataBase(newDB: SQLiteObject): void {
        if (this.dataBase == null) {
            this.dataBase = newDB;
        }
    }

    public createTable() {
        let statement = "CREATE TABLE IF NOT EXISTS Task(Tas_Id INTEGER PRIMARY KEY AUTOINCREMENT, Tas_Name NVARCHAR(50) NOT NULL, Tas_Progress INTEGER NOT NULL, Tas_Note NVARCHAR(60) NOT NULL, Tas_Difficulty INTEGER NOT NULL, Tas_Date TEXT NOT NULL)";
        return this.dataBase.executeSql(statement, []);
    }

    public add(name: String, progress: number, note: String, difficulty: number, date: Date): Promise<any> {
        let statement = "INSERT INTO Task(Tas_Name, Tas_Progress, Tas_Note, Tas_Difficulty, Tas_Date) VALUES (?, ?, ?, ?)";
        return this.dataBase.executeSql(statement, [name, progress, note, difficulty, (date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDay())]).then(() => {            
            return Promise.resolve(true);
        }).catch((error) => {
            Promise.reject(error);
        });
    }

    public modify(id: number, name: String, progress: number, note: String, difficulty: number): Promise<any> {
        let statement = "UPDATE Task set Tas_Name = ?, Tas_Progress = ?, Tas_Note = ?, Tas_Difficulty = ? WHERE Tas_Id = ?";
        return this.dataBase.executeSql(statement, [name, progress, note, difficulty, id]).then(() => {
            return Promise.resolve(true);
        }).catch((error) => {
            Promise.reject(error);
        });
    }

    public delete(id: number): Promise<any> {
        let statement = "DELETE FROM Task WHERE Tas_Id = ?";
        return this.dataBase.executeSql(statement, [id]).then(() => {
            return Promise.resolve(true);
        }).catch((error) => {
            Promise.reject(error);
        });
    }

    public getTasksList(date: Date): Array<DailyTask> {
        let result: Array<DailyTask> = new Array<DailyTask>();

        return result;
    }

}