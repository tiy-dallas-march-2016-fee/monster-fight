'use strict';

(function(context) {

  function Paladin(name, maxHitpoints, imageUrl) {
    context.Monster.call(this, name, maxHitpoints, imageUrl);
  }

  Paladin.prototype = new context.Monster();

  Paladin.create = function() {
    return new Paladin('Paladin', '25', '/images/paladin.jpg');
  }

  Paladin.prototype.takeDamage = function(damage) {
    this.hitpoints -= damage;

    if (this.hitpoints <= 0) {
      return "The paladin fell in battle and failed his patron deity.";
    }

    if (damage === 0) {
      return "The Paladin defended himself successfully!";
    } else if (damage > 3) {
      return "Blasphemy!  The Paladin took " + damage + " and has " + this.hitpoints + " left so he can still fight!";
    }else {
      return "The Paladin took " + damage + " by the blasphemer and has " + this.hitpoints + " remaining";
    }

  }

  context.GoodMonsters.push(Paladin);

})(window.MonsterFight);
