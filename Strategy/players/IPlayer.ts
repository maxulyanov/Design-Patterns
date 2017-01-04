/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  03.01.2017
 * Time: 18:42
 */


'use strict';


export interface IPlayer {
    play(): void,
    pause(): void
    stop(): void,
}