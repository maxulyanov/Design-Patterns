/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  05.01.2017
 * Time: 16:05
 */




export abstract class Base {

    protected description: string = '';


    /**
     *
     * @returns {string}
     */
    public getDescription() {
        return this.description;
    }


    /**
     *
     */
    abstract getPrice(): number;

}