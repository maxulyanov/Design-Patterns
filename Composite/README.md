# Composite
use:


```javascript
const file = new File('System.xml');
const file2 = new File('win.ini');
const file3 = new File('Starter.xml');

const folder = new Folder('Windows');
folder.add(file);
folder.add(file2);
folder.add(file3);

console.log(file.copy()); // System.xml
console.log(folder.copy()); // ["System.xml", "win.ini", "Starter.xml"]
```