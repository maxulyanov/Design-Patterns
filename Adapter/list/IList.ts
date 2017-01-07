/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  08.01.2017
 * Time: 1:31
 */


export interface IList {
    push(item: string): void;
    remove(index: number): void;
    getItems(): string[];
}