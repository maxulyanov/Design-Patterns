/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  08.01.2017
 * Time: 15:36
 */


export class HardDrive {

    private ready: boolean;


    constructor() {
        this.ready = false;
    }


    public init(): void {
        console.log('init Hard drive');
        this.ready = true;
    }

}