# Facade
use:


```javascript
let power = new Power();
let cpu = new CPU();
let memory = new Memory();
let hardDrive = new HardDrive();

let computer = new Computer(power, cpu, memory, hardDrive);
computer.run();

setTimeout(() => {
    console.log(computer.getTempCPU()); // 25
}, 11e3);
```