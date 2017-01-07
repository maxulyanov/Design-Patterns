/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  07.01.2017
 * Time: 1:09
 */


export interface ICommand {
    execute(): void;
    undo(): void;
}