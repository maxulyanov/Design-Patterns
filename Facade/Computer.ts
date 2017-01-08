/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  08.01.2017
 * Time: 15:48
 */


import { Power } from './components/Power';
import { CPU } from './components/CPU';
import { Memory } from './components/Memory';
import { HardDrive } from './components/HardDrive';

export class Computer {

    private power: Power;
    private cpu: CPU;
    private memory: Memory;
    private hardDrive: HardDrive;


    constructor(power: Power, cpu: CPU, memory: Memory, hardDrive: HardDrive) {
        this.power = power;
        this.cpu = cpu;
        this.memory = memory;
        this.hardDrive = hardDrive;
    }


    public run(): void {
        this.power.run();
        this.cpu.load();
        this.memory.processData();
        this.hardDrive.init();
        console.log('computer is running');
    }


    /**
     *
     */
    public getTempCPU(): number {
        return this.cpu.getTemp();
    }

}