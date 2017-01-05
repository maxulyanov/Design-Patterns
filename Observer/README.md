# Observer

use:


```javascript
const serviceNews = new ServiceNews();
const lastNews = new LastNews();
const popularNews = new PopularNews();

serviceNews.addObserver(lastNews);
serviceNews.publish();
serviceNews.addObserver(popularNews);

setTimeout(() => {
    serviceNews.publish();
    serviceNews.removeObserver(popularNews);
}, 2000);

setTimeout(() => {
    serviceNews.publish();
}, 5000);
```