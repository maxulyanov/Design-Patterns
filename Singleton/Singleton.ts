/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  10.01.2017
 * Time: 21:30
 */




export class Singleton {

    private static instance = null;


    constructor() {
        if(Singleton.instance != null) {
            throw new Error("Error: Use Singleton.getInstance()");
        }
    }


    public static getInstance(): Singleton {
        if(Singleton.instance == null) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }


    public connect(): void {
        console.log('connect!');
    }

}