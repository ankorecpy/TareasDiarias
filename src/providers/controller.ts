import { FactoryDay } from './factoryDay';
import { TaskDao } from './dataBase/task-dao';

export class Controller {

    private static instance: Controller = null;

    private constructor() { }

    public static getInstance(): Controller {
        if (Controller.instance == null) {
            Controller.instance = Controller.constructor();
        }
        return Controller.instance;
    }

    public createTask(name: String, progress: number, note: String, difficulty: number, date: Date): Promise<boolean> {
        let taskDao: TaskDao = new TaskDao();
        return taskDao.add(name, progress, note, difficulty, date).then(() => {
            return Promise.resolve(true);
        }).catch(() => {
           return Promise.resolve(false); 
        });
    }

    public modifyTask(id: number, name: String, progress: number, note: String, difficulty: number): boolean {
        let result: boolean = false;
        let taskDao: TaskDao = new TaskDao();
        taskDao.modify(id, name, progress, note, difficulty);
        return result;
    }

    public deleteTask(id: number): boolean {
        let result: boolean = false;
        let taskDao: TaskDao = new TaskDao();
        taskDao.delete(id);
        return result;
    }

    public getDay(date: Date): any {
        let factory: FactoryDay = new FactoryDay();
        factory.setDate(date);
        return factory.create();
    }

}