/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  29.01.2017
 * Time: 16:23
 */



import { Constructor } from './constructor/Constructor';
import { News } from './constructor/builders/News';
import { Profile } from './constructor/builders/Profile';


const constructor = new Constructor();

constructor.setBuilder(new News());
constructor.createPage();
const pageNews = constructor.getPage();

constructor.setBuilder(new Profile());
constructor.createPage();
const pageProfile = constructor.getPage();



