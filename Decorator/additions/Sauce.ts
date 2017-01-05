/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  05.01.2017
 * Time: 16:11
 */



import { AdditionBase } from './AdditionBase';
import { Base } from "../Base";

export class Sauce extends AdditionBase {

    protected price: number;


    /**
     *
     * @param base
     */
    constructor(base: Base) {
        super(base);
        this.price = 20;
        this.description = base.getDescription() + ' with sause';
    }

}