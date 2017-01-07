/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  08.01.2017
 * Time: 1:38
 */


import { IMenu } from "./IMenu";

export class Menu implements IMenu {

    private items: string[];


    constructor() {
        this.items = [];
    }


    /**
     *
     * @param item
     */
    public add(item: string): void {
        this.items.push(item);
    }


    /**
     *
     * @param index
     */
    public delete(index: number): void {
        this.items.splice(index, 1);
    }


    public getItems(): string[] {
        return this.items;
    }


}