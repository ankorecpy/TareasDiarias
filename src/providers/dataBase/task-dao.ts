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
        let statement = "CREATE TABLE IF NOT EXISTS Task(Tas_Id INTEGER PRIMARY KEY AUTOINCREMENT, Tas_Name NVARCHAR(50), Tas_Progress INTEGER, Tas_Note NVARCHAR(60), Tas_Difficulty INTEGER, Tas_Date TEXT)";
        return this.dataBase.executeSql(statement, []);
    }

    public add(name: String, progress: number, note: String, difficulty: number, date: Date): boolean {
        let result: boolean = false;
        let statement = "INSERT INTO Task(Tas_Name, Tas_Progress, Tas_Note, Tas_Difficulty, Tas_Date) VALUES (?, ?, ?, ?)";
        //return this.dataBase.executeSql(statement, [name, progress, note, difficulty, date]);
        return result;
    }

    public modify(id: number, name: String, progress: number, note: String, difficulty: number): boolean {
        let result: boolean = false;
        
        return result;
    }

    public delete(id: number): boolean {
        let result: boolean = false;
        
        return result;
    }

    public getTasksList(date: Date): Array<DailyTask> {
        let result: Array<DailyTask> = new Array<DailyTask>();

        return result;
    }

}