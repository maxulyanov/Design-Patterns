/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  08.01.2017
 * Time: 1:48
 */


import { IMenu } from "./menu/IMenu";
import { IList } from "./list/IList";

export class AdapterMenuList implements IList{

    private menu: IMenu;


    /**
     *
     * @param menu
     */
    constructor(menu: IMenu) {
        this.menu = menu;
    }


    /**
     *
     * @param item
     */
    public push(item: string): void {
        this.menu.add(item);
    }


    /**
     *
     * @param index
     */
    public remove(index: number): void {
        this.menu.delete(index);
    }


    /**
     *
     * @returns {string[]}
     */
    public getItems(): string[] {
        return this.menu.getItems();
    }

}