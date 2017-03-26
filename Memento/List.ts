/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  26.03.2017
 * Time: 22:13
 */


'use strict';


import { Save } from './Save'


export class List {

    private items: Save[];

    constructor() {
        this.items = [];
    }

    /**
     *
     * @param save
     */
    public setSave(save: Save): void {
        this.items.push(save);
    }

    /**
     *
     * @param index
     * @returns {Save}
     */
    public getSave(index: number): Save {
        return this.items[index];
    }

    /**
     *
     * @returns {string}
     */
    public getList(): string {
        let result: string = '';
        this.items.forEach((item, index) => result += `[${index}]${item.getInfo()} \n`);
        return result;
    }

}