/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  08.01.2017
 * Time: 18:48
 */


import { DrinkMachine } from "./DrinkMachine";

export class Coffee extends DrinkMachine{

    constructor() {
        super();
    }


    public addBase(): void {
        console.log('add coffee beans');
    }


    public addToping(): void {
        console.log('add milk');
    }


    public printResult(): void {
        console.info('coffee ready!');
    }


}