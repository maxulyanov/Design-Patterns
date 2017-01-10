import { Singleton } from "./Singleton";
/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  10.01.2017
 * Time: 21:37
 */



let instance = Singleton.getInstance();
instance.connect();

let instance2 = Singleton.getInstance();

console.log(instance === instance2);