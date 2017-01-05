/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  05.01.2017
 * Time: 16:18
 */


import { Base } from "../Base";


export class Pepperoni extends Base {

    protected description: string;

    private price: number;


    /**
     *
     */
    constructor() {
        super();
        this.price = 300;
        this.description = 'Pizza Pepperoni';
    }


    /**
     *
     * @returns {number}
     */
    getPrice(): number {
        return this.price;
    }

}