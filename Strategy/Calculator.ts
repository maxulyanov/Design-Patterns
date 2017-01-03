/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  03.01.2017
 * Time: 18:41
 */


import { StrategyInterface } from  './strategies/Strategy.interface';



class Calculator {


    private strategy: StrategyInterface;


    /**
     *
     * @param strategy
     */
    constructor(strategy: StrategyInterface) {
        this.strategy = strategy;
    }


    /**
     *
     * @param strategy
     */
    public setStrategy(strategy: StrategyInterface) {
        this.strategy = strategy;
    }


    /**
     *
     * @param a
     * @param b
     * @returns {number}
     */
    public execute(a: number, b: number): number {
        return this.strategy.execute(a, b);
    }

}