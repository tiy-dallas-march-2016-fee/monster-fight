'use strict';

(function(context) {

  function Dragon(name, maxHitpoints, imageUrl) {
    context.Monster.call(this, name, maxHitpoints, imageUrl);
  }

  Dragon.prototype = new context.Monster();

  Dragon.create = function() {
    return new Dragon('Dragon', '20', '/images/dragon.jpg');
  }

  Dragon.prototype.takeDamage = function(damage) {
    this.hitpoints -= damage;

    if (damage === 0) {
      return 'The Dragon&#39;s scales blocked the attack!';
    }
    else if (damage > 3) {
      return 'Critical hit! The Dragon was staggered and took ' + damage + ' points of damage and has ' + this.hitpoints + ' left.';
    }
    else {
      return 'This monster took ' + damage + ' points of damage and has ' + this.hitpoints + ' left.';
    }
  }

  context.BadMonsters.push(Dragon);

})(window.MonsterFight);
