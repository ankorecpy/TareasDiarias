
export abstract class Task {

    protected idTask: number;
    protected name: String;
    protected progress: number;

    public getId(): number {
        return this.idTask;
    }
    public setId(newId: number): void {
        this.idTask = newId;
    }

    public getName(): String {
        return this.name;
    }
    public setName(newName: String) : void {
        this.name = newName;
    }

    public getProgress(): number {
        return this.progress;
    }
    public setProgress(newProgres: number): void {
        this.progress = newProgres;
    }

}