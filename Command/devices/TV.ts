/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  07.01.2017
 * Time: 19:33
 */


enum State { OFF, ON }

export class TV {

    private state: State;
    private volume: number;
    private volumeStep: number;


    constructor() {
        this.state = State.OFF;
        this.volume = 0;
        this.volumeStep = 10;
    }


    public on() {
        this.state = State.ON;
        console.log('Tv On');
    }


    public off() {
        this.state = State.OFF;
        console.log('Tv Off');
    }


    public volumeUp() {
        this.volume += this.volumeStep;
        if(this.volume > 100) {
            this.volume = 100;
        }
        console.log('Tv volume up');
    }


    public volumeDown() {
        this.volume -= this.volumeStep;
        if(this.volume < 0) {
            this.volume = 0;
        }
        console.log('Tv volume down');
    }


    /**
     *
     * @returns {State}
     */
    public getState(): State {
        return this.state;
    }


    /**
     *
     * @returns {number}
     */
    public getVolume() {
        return this.volume;
    }

}


