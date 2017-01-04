/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  03.01.2017
 * Time: 18:41
 */


import { IPlayer } from  './IPlayer';



class YoutubePlayer implements IPlayer {


    private player: IPlayer;


    /**
     *
     */
    constructor() {}



    /**
     *
     */
    public play(): void {
        console.log('Youtube API: play');
    }

    /**
     *
     */
    public pause(): void {
        console.log('Youtube API: pause');
    }

    /**
     *
     */
    public stop(): void {
        console.log('Youtube API: stop');
    }

}