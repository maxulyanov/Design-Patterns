/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  29.01.2017
 * Time: 16:34
 */


import { PageBuilder } from './builders/PageBuilder'
import { Page } from './Page';


export class Constructor {

    private builder: PageBuilder;


    constructor() {}

    public setBuilder(builder: PageBuilder) {
        this.builder = builder;
    }


    public getPage(): Page {
        return this.builder.getPage();
    }

    public createPage(): void {
        this.builder.createNewPage();
        this.builder.buildHeader();
        this.builder.buildContent();
        this.builder.buildFooter();
    }

}