/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  08.01.2017
 * Time: 1:31
 */


export interface IMenu {
    add(item: string): void;
    delete(index: number): void;
    getItems(): string[];
}