/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  06.01.2017
 * Time: 17:38
 */


import { IEngineryFactory } from "./IEngineryFactory";
import { Tank } from "../technics/tanks/Tank";
import { Aircraft } from "../technics/aircraft/Aircraft";
import { AR200 } from "../technics/aircraft/AR200";
import { Panzer } from "../technics/tanks/Panzer";


export class EngineryFactoryGermany implements IEngineryFactory {

    createTank(): Tank {
        return new Panzer();
    }

    createAircraft(): Aircraft {
        return new AR200();
    }

}