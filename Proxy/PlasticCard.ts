/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  16.03.2017
 * Time: 23:14
 */


'use strict';

import { IPayment } from './IPayment'

export class PlasticCard implements IPayment {

    account: IPayment;

    /**
     *
     * @param account
     */
    constructor(account: IPayment) {
        this.account = account;
    }

    /**
     *
     * @param value
     * @returns {boolean}
     */
    public makeTransaction(value): boolean {
        return this.account.makeTransaction(value);
    }


    /**
     *
     * @returns {number}
     */
    public getSum(): number {
        return this.account.getSum();
    }

}