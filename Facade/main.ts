/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  08.01.2017
 * Time: 15:49
 */


import { Power } from './components/Power';
import { CPU } from './components/CPU';
import { Memory } from './components/Memory';
import { HardDrive } from './components/HardDrive';
import { Computer } from "./Computer";


let power = new Power();
let cpu = new CPU();
let memory = new Memory();
let hardDrive = new HardDrive();

let computer = new Computer(power, cpu, memory, hardDrive);
computer.run();

setTimeout(() => {
    console.log(computer.getTempCPU()); // 25
}, 11e3);