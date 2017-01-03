/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  03.01.2017
 * Time: 18:42
 */


'use strict';


export interface StrategyInterface {
    execute(a: number, b: number): number;
}