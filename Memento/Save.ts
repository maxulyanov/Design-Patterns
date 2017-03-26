/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  26.03.2017
 * Time: 22:13
 */


'use strict';


export class Save {

    private level: number;
    private section: number;

    /**
     *
     * @param level
     * @param section
     */
    constructor(level, section) {
        this.level = level;
        this.section = section;
    }

    /**
     *
     * @returns {number}
     */
    public getLevel(): number {
        return this.level;
    }

    /**
     *
     * @returns {number}
     */
    public getSection(): number {
        return this.section;
    }


    /**
     *
     * @returns {string}
     */
    public getInfo(): string {
        return `level: ${this.level} section: ${this.section}`
    }

}