import { OperativeDay } from '../operativeDay';

import { SQLiteObject } from '@ionic-native/sqlite';

export class DayDao {

    private dataBase: SQLiteObject;

    public getDay(date: Date): OperativeDay {
        let result: OperativeDay;
        return result;
    }

    public setDataBase(newDB: SQLiteObject): void {
        if (this.dataBase == null) {
            this.dataBase = newDB;
        }
    }

}