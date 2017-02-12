/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  07.01.2017
 * Time: 0:29
 */


'use strict';

import { ViewedItem } from "./ViewedItem";
import { ObjectPool } from "./ObjectPool";


const pool = new ObjectPool();

for(let i = 0; i < 2; i++) {
    const instance = pool.create(ViewedItem);
    setTimeout(() => {
        pool.delete(instance);
    }, 1000);
}


pool.create(ViewedItem);

setTimeout(() => {
    console.log(pool.getPool()); // pool size - 3 [1 -> false, 2 -> false, 3 -> true]
}, 2000);




