'use strict';

(function(context) {

  function Elf(name, maxHitpoints, imageUrl) {
    context.Monster.call(this, name, maxHitpoints, imageUrl);
  }

  Elf.prototype = new context.Monster();

  Elf.create = function() {
    return new Elf('Elf', '20', '/images/elf.jpg');
  }

  Elf.prototype.takeDamage = function(damage) {
    this.hitpoints -= damage;

    if (this.hitpoints <= 0) {
      return "The Elf failed to protect his homeland";
    }

    if (damage === 0) {
      return 'The Elf felt nothing!';
    }
    else if (damage > 3) {
      return 'Critical hit! This elf took ' + damage + ' points of damage and has ' + this.hitpoints + ' left.';
    }
    else {
      return 'This monster took ' + damage + ' points of damage and has ' + this.hitpoints + ' left.';
    }

  }

  context.GoodMonsters.push(Elf);

})(window.MonsterFight);
