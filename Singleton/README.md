# Singleton
use:


```javascript
let instance = Singleton.getInstance();
instance.connect(); // connect

let instance2 = Singleton.getInstance();

console.log(instance === instance2); // true
```