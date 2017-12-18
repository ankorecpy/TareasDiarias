import { Observer } from './Observer';

export abstract class Observable {

    protected observerList: Array<Observer> = new Array<Observer>();

    //add a new Observer to observerList
    public addObserver(newObserver: Observer): void {
        this.observerList.push(newObserver);
    }

    //get observerList's length
    public getObserverLength(): number {
        return this.observerList.length;
    }

    //get a observer in a position of observerList, return null if index is less than 0 or index is greater than number of elements of observerList or observerList's length is 0
    public getObserver(index: number): Observer {
        let observer: Observer = null;
        if (this.observerList.length > 0 && index >= 0 && index < this.observerList.length) {
            observer = this.observerList[index];
        }
        return observer;
    }

    //notify to every observer about changes
    public notifyAll(element: any): void {
        for (var index = 0; index < this.observerList.length; index++) {
            this.observerList[index].update(element);
        }
    }

}