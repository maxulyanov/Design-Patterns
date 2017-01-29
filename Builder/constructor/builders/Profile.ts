/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  29.01.2017
 * Time: 16:23
 */

import { PageBuilder } from './PageBuilder';



export class Profile extends PageBuilder {


    public buildHeader(): void {
        this.page.setHeader('Header for profile');
    }

    public buildContent(): void {
        this.page.setContent('Profile info');
    }

    public buildFooter(): void {
        this.page.setFooter('Footer');
    }


}
