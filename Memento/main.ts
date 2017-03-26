/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  16.03.2017
 * Time: 22:02
 */


'use strict';

import { Game } from './Game';
import { List } from './List';


const list = new List();
const game = new Game();

game.setFields(2, 5);
console.log(game.getInfo()); // level: 2 section: 5
list.setSave(game.saveGame());

game.setFields(3, 1);
console.log(game.getInfo()); // level: 3 section: 1
list.setSave(game.saveGame());

game.loadGame(list.getSave(0));
console.log(game.getInfo()); // level: 2 section: 5

