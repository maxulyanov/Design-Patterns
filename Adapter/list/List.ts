/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  08.01.2017
 * Time: 1:38
 */


import { IList } from "./IList";

export class List implements IList{

    private items: string[];


    constructor() {
        this.items = [];
    }


    /**
     *
     * @param item
     */
    public push(item: string): void {
        this.items.push(item);
    }


    /**
     *
     * @param index
     */
    public remove(index: number): void {
        this.items.splice(index, 1);
    }


    public getItems(): string[] {
        return this.items;
    }


}