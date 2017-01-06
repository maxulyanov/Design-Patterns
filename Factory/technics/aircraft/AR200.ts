/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  06.01.2017
 * Time: 17:14
 */

import { Aircraft } from "./Aircraft";


export class AR200 extends Aircraft {

    constructor() {
        super();
        this.name = 'AR200';
        this.speed = 600;
        this.altitude = 3500;
    }

}