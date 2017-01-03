# Strategy

use:


```javascript
const calculator = new Calculator(new Addition());
calculator.execute(5, 6); //11

calculator.setStrategy(new Multiplication());
calculator.execute(5, 6); // 30

calculator.setStrategy(new Subtraction());
calculator.execute(5, 6); // -1
```