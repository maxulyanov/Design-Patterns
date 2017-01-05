/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  04.01.2017
 * Time: 22:32
 */

import { IObservable } from './observable/IObservable';
import { IObserver } from "./observable/IObserver";

class ServiceNews implements IObservable {


    private news: any[];
    private observers: IObserver[];
    private currentNews: number;


    constructor() {
        this.news = [];
        this.observers = [];
        this.currentNews = 0;

        this.getRemoteData();
    }


    /**
     *
     */
    public publish(): void {
        this.notifyObservers(this.news[this.currentNews++]);
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


    /**
     *
     */
    private getRemoteData(): void {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'data.json', false);
        xhr.onload = () => {
            this.news = JSON.parse(xhr.responseText).news;
        };
        xhr.send();
    }

}