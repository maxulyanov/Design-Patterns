/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  08.01.2017
 * Time: 17:49
 */


export abstract class DrinkMachine {

    constructor() {}


    public cook(): void {
        this.addBase();
        this.addWater();
        this.addToping();
        this.stirDrink();
        this.printResult();
    }


    abstract addBase(): void;

    abstract addToping(): void;

    abstract printResult(): void;


    public addWater(): void {
        console.log('add water');
    }


    public stirDrink(): void {
        console.log('stir drink');
    }

}