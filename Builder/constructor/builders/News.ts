/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  29.01.2017
 * Time: 16:23
 */

import { PageBuilder } from './PageBuilder';


export class News extends PageBuilder {

    public buildHeader(): void {
        this.page.setHeader('Header for news');
    }

    public buildContent(): void {
        this.page.setContent('News list');
    }

    public buildFooter(): void {
        this.page.setFooter('Footer');
    }

}
