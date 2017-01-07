/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  07.01.2017
 * Time: 0:29
 */


'use strict';


import { RemoteControl } from "./RemoteControl";
import { TV } from "./devices/TV";
import { On } from "./commands/tv/On";
import { Off } from "./commands/tv/Off";
import { VolumeUp } from "./commands/tv/VolumeUp";
import { VolumeDown } from "./commands/tv/VolumeDown";

let remoteControl = new RemoteControl();
let tv = new TV();

remoteControl.bindCommand(1, new On(tv));
remoteControl.bindCommand(2, new Off(tv));
remoteControl.bindCommand(3, new VolumeUp(tv));
remoteControl.bindCommand(4, new VolumeDown(tv));

remoteControl.pressButton(1);
remoteControl.pressButton(3);
remoteControl.pressButton(3);
remoteControl.pressButton(3);
remoteControl.pressUndoButton();

console.log(tv.getState()); // 1
console.log(tv.getVolume()); // 20

