/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  07.01.2017
 * Time: 1:11
 */

import { ICommand } from "./commands/ICommand";

export class RemoteControl {

    private buttons: ICommand[];
    private lastCommand: ICommand;


    constructor() {
        this.buttons = new Array(4);
        this.lastCommand = null;
    }


    /**
     *
     * @param number
     * @param command
     */
    public bindCommand(number: number, command: ICommand): void {
        this.buttons[number - 1] = command;
    }


    /**
     *
     * @param number
     */
    public pressButton(number: number): void {
        let command = this.buttons[number - 1];
        if(command != null) {
            command.execute();
            this.lastCommand = command;
        }
    }


    public pressUndoButton(): void {
        if(this.lastCommand != null) {
            this.lastCommand.undo();
        }
    }


}