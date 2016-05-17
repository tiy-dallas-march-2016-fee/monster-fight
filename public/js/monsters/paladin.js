'use strict';

(function(context) {

  function Paladin(name, maxHitpoints, imageUrl) {
    context.Monster.call(this, name, maxHitpoints, imageUrl);
  }

  Paladin.prototype = new context.Monster();

  Paladin.create = function() {
    return new Paladin('Paladin', '20', '/images/paladin.jpg');
  }

  Paladin.prototype.takeDamage = function(damage) {
    this.hitpoints -= damage;

    if (damage === 0) {
      return 'The Paladin blocked the attack with a shield';
    }
    else if (damage > 3) {
      return 'Critical hit! This Paladin took ' + damage + ' points of damage and has ' + this.hitpoints + ' left.';
    }
    else {
      return 'The Paladin took ' + damage + ' points of damage and has ' + this.hitpoints + ' left.';
    }
  }

  context.GoodMonsters.push(Paladin);

})(window.MonsterFight);
