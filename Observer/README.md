# Observer

use:


```javascript
    const serviceNews = new ServiceNews();
    serviceNews.parseNews();
    
    const news = new News();
    const lastNews = new LastNews();
    const popularNews = new PopularNews();
    
    news.addObserver(lastNews);
    news.update(serviceNews.getNews());
    news.addObserver(popularNews);
    
    
    setTimeout(() => {
        news.update(serviceNews.getNews());
        news.removeObserver(popularNews);
    }, 2000);
    
    setTimeout(() => {
        news.update(serviceNews.getNews());
    }, 5000);
```