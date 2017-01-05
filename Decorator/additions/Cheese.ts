/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  05.01.2017
 * Time: 16:11
 */



import { AdditionBase } from './AdditionBase';
import { Base } from "../Base";

export class Cheese extends AdditionBase {

    private price: number;
    private base: Base;


    /**
     *
     * @param base
     */
    constructor(base: Base) {
        super();
        this.base = base;
        this.price = 50;
        this.description = base.getDescription() + ' with cheese';
    }


    /**
     *
     * @returns {number}
     */
    getPrice(): number {
        return this.base.getPrice() + this.price;
    }

}