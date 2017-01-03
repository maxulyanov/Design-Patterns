/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  03.01.2017
 * Time: 18:50
 */


import { StrategyInterface } from  './Strategy.interface';


class Addition implements StrategyInterface {


    constructor() {}


    /**
     *
     * @param a
     * @param b
     * @returns {number}
     */
    execute(a: number, b: number): number {
        return a + b;
    }


}