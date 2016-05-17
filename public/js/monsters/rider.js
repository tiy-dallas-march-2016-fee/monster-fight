'use strict';

(function(context){

  function Rider(name, maxHitpoints, imageUrl) {
    context.Monster.call(this, name, maxHitpoints, imageUrl);
  }

  Rider.prototype = new context.Monster();

  Rider.create = function() {
    return new Rider('Ghost', '30', 'images/ghostrider.jpg');
  }

  Rider.prototype.takeDamage = function(damage) {
    this.hitpoints -= damage;

    if (damage === 0) {
      return 'Come on wit it!!!'
    }
    else if (damage > 3) {
      return 'Oh Snap!!. The Rider took ' + damage +  ' points of damage and has ' + this.hitpoints + 'left.';
    }
    else {
      return 'This monster took ' + damage + ' points of damage and has ' + this.hitpoints + ' left.';
    }
  }

  context.GoodMonsters.push(Rider)




})(window.MonsterFight);
