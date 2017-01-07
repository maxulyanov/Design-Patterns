/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  08.01.2017
 * Time: 1:32
 */

import { IList } from "./IList";


export class Reader {

    constructor() {}


    /**
     *
     * @param list
     */
    public display(list: IList): void {
        const items = list.getItems();
        if(items.length > 0) {
            items.forEach((item) => {
                console.log(`- ${item} \n`);
            });
        }
    }

    // other methods

}