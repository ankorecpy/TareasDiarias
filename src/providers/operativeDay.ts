import { Day } from './models/day';

export class OperativeDay extends Day {

    private totalProgress: number;

    constructor(id: number, date: Date) {
        super();
        this.idDay = id;
        this.date = date;
        this.totalProgress = 0;
    }

    public getTotalProgress(): number {
        return this.totalProgress;
    }
    private calculateProgress(): void {
        this.totalProgress = 0;
        for (var index = 0; index < this.taskList.length; index++) {
            this.totalProgress += this.taskList[index].getProgress();
        }
        this.totalProgress /= this.taskList.length;
    }  

}