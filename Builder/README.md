# Builder
use:


```javascript
const constructor = new Constructor();

constructor.setBuilder(new News());
constructor.createPage();
const pageNews = constructor.getPage();

constructor.setBuilder(new Profile());
constructor.createPage();
const pageProfile = constructor.getPage();
```