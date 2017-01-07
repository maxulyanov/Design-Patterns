# Observer

use:


```javascript
let factorySovetUnion = new EngineryFactorySovetUnion();
let factoryGermany = new EngineryFactoryGermany();

let tankUSSR = factorySovetUnion.createTank();
console.log(tankUSSR.getDescription()); // T34 speed: 75 power: 100

let aircraftUSSR = factorySovetUnion.createAircraft();
console.log(aircraftUSSR.getDescription()); // Mig1 speed: 650 altitude: 2800

let tankGermany = factoryGermany.createTank();
console.log(tankGermany.getDescription()); // Panzer speed: 60 power: 120
```