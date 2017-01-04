/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  03.01.2017
 * Time: 18:41
 */


import { IPlayer } from  './IPlayer';



class Html5Player implements IPlayer {


    private player: IPlayer;


    /**
     *
     */
    constructor() {}



    /**
     *
     */
    public play(): void {
        console.log('HTML5 Player play');
    }

    /**
     *
     */
    public pause(): void {
        console.log('HTML5 Player pause');
    }

    /**
     *
     */
    public stop(): void {
        console.log('HTML5 Player stop');
    }

}