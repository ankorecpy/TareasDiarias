import { Task } from './task';

export abstract class Day {

    protected idDay: number;
    protected taskList: Array<Task> = new Array<Task>();
    protected date: Date;

    public getId(): number {
        return this.idDay;
    }
    public setId(newId: number ): void {
        this.idDay = newId;
    }

    public addTask(newTask: Task): void {
        this.taskList.push(newTask);
    }
    public removeTask(idTask: number): void {
        //TODO
        alert("don't forget implement removeTask method (Day)");
    }

    public setTasksList(newTasksList: Array<Task>): void {
        this.taskList = newTasksList;
    }
    
}