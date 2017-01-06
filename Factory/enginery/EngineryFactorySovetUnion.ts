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
import { T34 } from "../technics/tanks/T34";
import { Mig1 } from "../technics/aircraft/Mig1";


export class EngineryFactorySovetUnion implements IEngineryFactory {

    createTank(): Tank {
        return new T34();
    }

    createAircraft(): Aircraft {
        return new Mig1();
    }

}