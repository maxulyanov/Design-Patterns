/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  05.01.2017
 * Time: 16:08
 */


import { Base } from '../Base';

export abstract class AdditionBase extends Base {

    protected price: number;
    private base: Base;


    /**
     *
     * @param base
     */
    constructor(base: Base) {
        super();
        this.base = base;
    }


    /**
     *
     * @returns {number}
     */
    getPrice(): number {
        return this.base.getPrice() + this.price;
    }
}