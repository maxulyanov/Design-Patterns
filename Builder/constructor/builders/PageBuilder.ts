/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  29.01.2017
 * Time: 16:23
 */

import { Page } from '../Page';



export abstract class PageBuilder {

    protected page: Page;


    public getPage(): Page {
        return this.page;
    }

    public createNewPage(): void {
        this.page = new Page();
    }

    public abstract buildHeader();
    public abstract buildContent();
    public abstract buildFooter();

}
