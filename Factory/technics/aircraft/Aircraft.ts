/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  06.01.2017
 * Time: 17:03
 */


export abstract class Aircraft {

    protected name: string;
    protected speed: number;
    protected altitude: number;


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
    public getAltitude() {
        return this.altitude;
    }


    /**
     *
     * @returns {string}
     */
    public getDescription() {
        return `${this.name} speed: ${this.speed} altitude: ${this.altitude}`;
    }

}