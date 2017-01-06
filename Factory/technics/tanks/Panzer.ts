/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  06.01.2017
 * Time: 17:15
 */

import { Tank } from "./Tank";

export class Panzer extends Tank {

    constructor() {
        super();
        this.name = 'Panzer';
        this.speed = 60;
        this.power = 120;
    }

}