/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  07.03.2017
 * Time: 22:56
 */


'use strict';

import { ISystemElement } from "./ISystemElement";

export class File implements ISystemElement {

    name: string;

    constructor(name) {
        this.name = name;
    }

    public copy(): string {
        return this.name;
    }

}