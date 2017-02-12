/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  09.02.2017
 * Time: 22:59
 */


import { IObject } from './IObject'


export class ObjectPool{

    private pool: IObject[];

    /**
     *
     */
    constructor() {
        this.pool = [];
    }

    /**
     *
     * @returns {IObject}
     */
    public create (cl): IObject {
        for (let i = 0; i < this.pool.length; ++i) {
            const instance = this.pool[i];
            if(!instance.isUse) {
                instance.isUse = true;
                return instance;
            }
        }

        const instance: IObject = new cl();
        instance.isUse = true;
        this.pool.push(instance);
        return instance;
    }

    /**
     *
     * @param object
     * @returns {boolean}
     */
    public delete (object: IObject): boolean {
        for (let i = 0; i < this.pool.length; ++i) {
            const instance = this.pool[i];
            if(instance === object) {
                instance.isUse = false;
                return true;
            }
        }
        return false;
    }

    public getPool(): IObject[] {
        return this.pool;
    }

}