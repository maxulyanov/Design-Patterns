# Adapter
use:


```javascript
let list = new List();
list.push('Item list 1');
list.push('Item list 2');
list.push('Item list 3');

let reader = new Reader();
reader.display(list);

let menu = new Menu();
menu.add('Menu item 1');
menu.add('Menu item 2');
menu.add('Menu item 3');

// NOT WORKING! Method display expects IList
// reader.display(menu);

let adapteMenu = new AdapterMenuList(menu);
reader.display(adapteMenu);
```