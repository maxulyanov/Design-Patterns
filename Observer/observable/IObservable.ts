/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  04.01.2017
 * Time: 22:33
 */


import { IObserver } from  './IObserver';

export interface IObservable {
    addObserver(observer: IObserver): void,
    removeObserver(observer: IObserver): void,
    notifyObservers(data: any): void
}