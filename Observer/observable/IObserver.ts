/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  04.01.2017
 * Time: 22:34
 */


export interface IObserver {
    update(data: any): void;
}