/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  08.01.2017
 * Time: 15:36
 */


export class Power {

    private ready: boolean;


    constructor() {
        this.ready = false;
    }


    public run(): void {
        console.log('run power');
        this.ready = true;
    }

}