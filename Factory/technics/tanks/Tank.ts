/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  06.01.2017
 * Time: 17:02
 */


export abstract class Tank {

    protected name: string;
    protected speed: number;
    protected power: number;

    /**
     *
     * @returns {string}
     */
    public getName() {
        return this.name;
    }


    /**
     *
     * @returns {number}
     */
    public getSpeed() {
        return this.speed;
    }


    /**
     *
     * @returns {number}
     */
    public getPower() {
        return this.power;
    }


    /**
     *
     * @returns {string}
     */
    public getDescription() {
        return `${this.name} speed: ${this.speed} power: ${this.power}`;
    }

}