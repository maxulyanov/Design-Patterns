/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  03.01.2017
 * Time: 18:41
 */


import { IPlayer } from  './players/IPlayer';



class Player {


    private player: IPlayer;


    /**
     *
     * @param player
     */
    constructor(player: IPlayer) {
        this.player = player;
    }


    /**
     *
     * @param player
     */
    public setPlayer(player: IPlayer) {
        this.player = player;
    }


    /**
     *
     */
    public play(): void {
        this.player.play();
    }

    /**
     *
     */
    public pause(): void {
        this.player.pause();
    }

    /**
     *
     */
    public stop(): void {
        this.player.stop();
    }

}