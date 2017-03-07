/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  06.03.2017
 * Time: 23:11
 */


'use strict';


import { File } from "./File";
import { Folder } from "./Folder";


const file = new File('System.xml');
const file2 = new File('win.ini');
const file3 = new File('Starter.xml');

const folder = new Folder('Windows');
folder.add(file);
folder.add(file2);
folder.add(file3);

console.log(file.copy()); // System.xml
console.log(folder.copy()); // ["System.xml", "win.ini", "Starter.xml"]