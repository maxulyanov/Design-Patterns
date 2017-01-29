/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  29.01.2017
 * Time: 16:23
 */


export class Page {

    private header: string;
    private content: string;
    private footer: string;


    public setHeader(header: string) {
        this.header = header;
    }

    public setContent(content: string) {
        this.content = content;
    }

    public setFooter(footer: string) {
        this.footer = footer;
    }

}