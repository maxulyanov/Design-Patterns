# Decorator
use:


```javascript
let remoteControl = new RemoteControl();
let tv = new TV();

remoteControl.bindCommand(1, new On(tv));
remoteControl.bindCommand(2, new Off(tv));
remoteControl.bindCommand(3, new VolumeUp(tv));
remoteControl.bindCommand(4, new VolumeDown(tv));

remoteControl.pressButton(1);
remoteControl.pressButton(3);
remoteControl.pressButton(3);
remoteControl.pressButton(3);
remoteControl.pressUndoButton();

console.log(tv.getState()); // 1
console.log(tv.getVolume()); // 20
```