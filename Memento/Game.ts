/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  26.03.2017
 * Time: 21:15
 */


'use strict';


import { Save } from './Save'


export class Game {

    private level: number;
    private section: number;

    constructor() {}

    /**
     *
     * @param level
     * @param section
     */
    public setFields(level, section): void {
        this.level = level;
        this.section = section;
    }

    /**
     *
     * @returns {Save}
     */
    public saveGame(): Save {
        return new Save(this.level, this.section);
    }

    /**
     *
     * @param save
     */
    public loadGame(save: Save): void {
        this.level = save.getLevel();
        this.section = save.getSection();
    }

    /**
     *
     * @returns {string}
     */
    public getInfo(): string {
        return `level: ${this.level} section: ${this.section}`
    }

}