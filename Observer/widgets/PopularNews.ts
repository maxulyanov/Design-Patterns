/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  04.01.2017
 * Time: 23:04
 */


import { IObserver } from '../observable/IObserver';


class PopularNews implements IObserver {


    constructor() {}


    /**
     *
     * @param data
     */
    public update(data: any): void {
        this.display(data)
    }


    /**
     *
     * @param data
     */
    private display(data: any) {
        console.info('Popular news update: ');
        console.log(data.title);
    }

}