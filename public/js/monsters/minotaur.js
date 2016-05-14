'use strict';

(function(context) {

  function Minotaur(name, maxHitpoints, imageUrl) {
    context.Monster.call(this, name, maxHitpoints, imageUrl);
  }

  Minotaur.prototype = new context.Monster();

  Minotaur.create = function() {
    return new Minotaur('Minotaur', '20', '/images/minotaur.jpg');
  }

  context.BadMonsters.push(Minotaur);

})(window.MonsterFight);
