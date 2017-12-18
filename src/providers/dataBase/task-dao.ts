import { Observable } from '../models/Observable';
import { DailyTask } from '../dailyTask';

export class TaskDao extends Observable {


    public add(name: String, progress: number, note: String, difficulty: number, date: Date): boolean {
        let result: boolean = false;

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