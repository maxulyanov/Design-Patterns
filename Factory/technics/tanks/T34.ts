/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  06.01.2017
 * Time: 17:14
 */

import { Tank } from "./Tank";

export class T34 extends Tank {

    constructor() {
        super();
        this.name = 'T34';
        this.speed = 75;
        this.power = 100;
    }

}