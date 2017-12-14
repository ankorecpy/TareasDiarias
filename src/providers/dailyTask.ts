import { Task } from './models/task';

export class DailyTask extends Task {

    private note: String;
    private difficultyLevel: number;

    constructor(idTask: number, name: String, progress: number, note: String, difficultyLevel: number) {
        super();
        this.idTask = idTask;
        this.name = name;
        this.progress = progress;
        this.note = note;
        this.difficultyLevel = difficultyLevel;
    }

    public getNote(): String {
        return this.note;
    }
    public setNote(newNote: String): void {
        this.note = newNote;
    }

    public getDifficultyLevel(): number {
        return this.difficultyLevel;
    }
    public setDificultyLevel(newLevel: number): void {
        this.difficultyLevel = newLevel;
    }

}