'use strict';

(function(context) {

  function Monster(name, maxHitpoints, imageUrl) {
    this.name = name;
    this.maxHitpoints = maxHitpoints;
    this.hitpoints = maxHitpoints;
    this.imageUrl = imageUrl;
  }

  Monster.prototype.takeDamage = function(damage) {
    this.hitpoints -= damage;
    if (this.hitpoints <= 0) {
      return "The monster has fallen in battle";
    } else {
      return 'This monster took ' + damage + ' points of damage and has ' + this.hitpoints + ' left.';
    }
  }

  context.Monster = Monster;
  context.GoodMonsters = [];
  context.BadMonsters = [];

})(window.MonsterFight);
