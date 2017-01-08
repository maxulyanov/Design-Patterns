/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  08.01.2017
 * Time: 18:48
 */


import { DrinkMachine } from "./DrinkMachine";

export class Tea extends DrinkMachine{

    constructor() {
        super();
    }


    public addBase(): void {
        console.log('add tea leaves');
    }


    public addToping(): void {
        console.log('add lime');
    }


    public printResult(): void {
        console.info('tea ready!');
    }


}