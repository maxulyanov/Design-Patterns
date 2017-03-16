/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  16.03.2017
 * Time: 23:12
 */


'use strict';


export interface IPayment {
    makeTransaction(value: number): boolean;
    getSum(): number;
}