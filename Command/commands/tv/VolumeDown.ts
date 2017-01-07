/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  07.01.2017
 * Time: 20:25
 */

import { ICommand } from "../ICommand";
import { TV } from "../../devices/TV";

export class VolumeDown implements ICommand{

    private tv: TV;


    /**
     *
     * @param tv
     */
    constructor(tv: TV) {
        this.tv = tv;
    }


    public execute(): void {
        this.tv.volumeDown();
    }


    public undo(): void {
        this.tv.volumeUp();
    }


}