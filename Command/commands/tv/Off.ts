/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  07.01.2017
 * Time: 20:25
 */

import { ICommand } from "../ICommand";
import { TV } from "../../devices/TV";

export class Off implements ICommand{

    private tv: TV;


    /**
     *
     * @param tv
     */
    constructor(tv: TV) {
        this.tv = tv;
    }


    execute(): void {
        this.tv.off();
    }


    undo(): void {
        this.tv.on();
    }


}