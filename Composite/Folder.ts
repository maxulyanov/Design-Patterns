/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  07.03.2017
 * Time: 22:56
 */


'use strict';

import { ISystemElement } from "./ISystemElement";

export class Folder implements ISystemElement {

    childs: ISystemElement[];
    name: string;

    constructor(name) {
        this.childs = [];
        this.name = name;
    }

    public copy(): string[] {
        const names: string[] = [];
        for(let child of this.childs) {
            names.push(child.copy());
        }
        return names;
    }


    public add(file: ISystemElement): void {
        this.childs.push(file);
    }

    public remove(file: ISystemElement): void {
        const position = this.childs.indexOf(file);
        position >= 0 && this.childs.splice(position, 1);
    }

}