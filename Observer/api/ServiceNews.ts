/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  04.01.2017
 * Time: 22:50
 */


class ServiceNews {


    private news: any[];
    private currentCountNews: number;


    constructor() {
        this.news = [];
        this.currentCountNews = 0;
    }


    /**
     *
     */
    public parseNews(): void {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'api/data.json', false);
        xhr.onload = () => {
            this.news = JSON.parse(xhr.responseText).news;
        };
        xhr.send();
    }


    /**
     *
     * @returns {any}
     */
    public getNews(): any[] {
        return this.news[this.currentCountNews++];
    }

}