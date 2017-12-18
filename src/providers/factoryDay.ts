import { OperativeDay } from './operativeDay';
import { DailyTask } from './dailyTask';

import { Factory } from './models/Factory';

import { DayDao } from './dataBase/day-dao';
import { TaskDao } from './dataBase/task-dao';

export class FactoryDay implements Factory {

    private date: Date;
    private dayDao: DayDao;
    private taskDao: TaskDao;

    constructor() { }

    public setDate(newDate: Date): void {
        this.date = newDate;
    }

    public create(): any {
        let day: OperativeDay = null;
        if (this.date != null) {
            day = this.dayDao.getDay(this.date);
            day.setTasksList(this.taskDao.getTasksList(this.date));
        }
        return day;
    }

}