/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  04.01.2017
 * Time: 22:32
 */

import { IObservable } from './observable/IObservable';
import { IObserver } from "./observable/IObserver";

class News implements IObservable {


    private news: any[];
    private observers: IObserver[];


    constructor() {
        this.news = [];
        this.observers = [];
    }


    /**
     *
     * @param data
     */
    public update(data: any) {
        this.news.push(data);
        this.notifyObservers(data);
    }



    /**
     *
     * @param observer
     */
    public addObserver(observer: IObserver): void {
        this.observers.push(observer);
    }


    /**
     *
     * @param observer
     */
    public removeObserver(observer: IObserver): void {
        let index = this.observers.indexOf(observer);
        if(index >= 0) {
            this.observers.splice(index, 1);
        }
    }


    /**
     *
     * @param data
     */
    public notifyObservers(data: any): void {
        if(this.observers.length > 0) {
            this.observers.forEach((observer) => {
                observer.update(data);
            })
        }
    }


}