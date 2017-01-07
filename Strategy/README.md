# Strategy

use:


```javascript
let player = new Player(new Html5Player());
player.play(); // HTML5 Player play
player.stop(); // HTML5 Player stop

player.setPlayer(new YoutubePlayer());
player.play(); // Youtube API: play
```