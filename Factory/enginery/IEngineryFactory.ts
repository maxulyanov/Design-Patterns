/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  06.01.2017
 * Time: 17:00
 */

import { Tank } from "../technics/tanks/Tank";
import { Aircraft } from "../technics/aircraft/Aircraft";


export interface IEngineryFactory {
    createTank(): Tank
    createAircraft(): Aircraft
}