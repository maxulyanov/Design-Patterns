/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  16.03.2017
 * Time: 23:14
 */


'use strict';


import { IPayment } from './IPayment'

export class BankAccount implements IPayment {

    cards: IPayment[];
    sum: number;

    /**
     *
     * @param sum
     */
    constructor(sum) {
        this.cards = [];
        this.sum = sum;
    }

    /**
     *
     * @param card
     */
    public addCard(card: IPayment): void {
        this.cards.push(card);
    }

    /**
     *
     * @returns {IPayment[]}
     */
    public getCardsList():IPayment[] {
        return this.cards;
    }

    /**
     *
     * @param value
     * @returns {boolean}
     */
    public makeTransaction(value): boolean {
        if(value + this.sum >= 0) {
            this.sum += value;
            return true;
        }
        return false;
    }

    /**
     *
     * @returns {number}
     */
    public getSum(): number {
        return this.sum;
    }


}