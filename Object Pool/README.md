# Object Pool
use:


```javascript
const pool = new ObjectPool();

for(let i = 0; i < 2; i++) {
    const instance = pool.create(ViewedItem);
    setTimeout(() => {
        pool.delete(instance);
    }, 1000);
}


pool.create(ViewedItem);

setTimeout(() => {
    console.log(pool.getPool()); // pool size - 3 [1 -> false, 2 -> false, 3 -> true]
}, 2000);
```