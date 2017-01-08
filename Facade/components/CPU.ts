/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  08.01.2017
 * Time: 15:36
 */


export class CPU {

    private ready: boolean;
    private temp: number;
    private maxTemp: number;


    constructor() {
        this.ready = false;
        this.temp = 20;
        this.maxTemp = 45;
    }


    public load(): void {
        console.log('load CPU');
        this.ready = true;
        this.upTemp();

    }


    /**
     *
     * @returns {number}
     */
    public getTemp(): number {
        return this.temp;
    }


    private upTemp(): void {
        setInterval(() => {
            if(this.temp < this.maxTemp) {
                this.temp += 1;
            }
        }, 2000);
    }

}