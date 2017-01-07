# Observer

use:


```javascript
let serviceNews = new ServiceNews();
let lastNews = new LastNews();
let popularNews = new PopularNews();

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