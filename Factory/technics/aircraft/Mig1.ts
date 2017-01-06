/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  06.01.2017
 * Time: 17:14
 */

import { Aircraft } from "./Aircraft";


export class Mig1 extends Aircraft {

    constructor() {
        super();
        this.name = 'Mig1';
        this.speed = 650;
        this.altitude = 2800;
    }

}