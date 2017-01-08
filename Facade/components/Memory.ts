/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  08.01.2017
 * Time: 15:36
 */


export class Memory {

    private ready: boolean;


    constructor() {
        this.ready = false;
    }


    public processData(): void {
        console.log('process data');
        this.ready = true;
    }

}