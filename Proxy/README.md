# Proxy
use:


```javascript
const account = new BankAccount(1000);
const card = new PlasticCard(account);
const card2 = new PlasticCard(account);
account.addCard(card);
account.addCard(card2);

card.makeTransaction(-100); // Successful transaction
card.makeTransaction(-100); // Successful transaction
card2.makeTransaction(500); // Successful transaction
card.makeTransaction(-5000); // Fail transaction

card.getSum(); // 1300
```