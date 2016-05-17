'use strict'

  (function(context){

    function Skullhead(name, maxHitpoints, imageUrl) {
      context.Monster.call(this, name, maxHitpoints, imageUrl);
    }

    Skullhead.prototype = new context.Monster;

    Skullhead.create = function() {
      return new Skullhead('SkullDuggery', '20', '/images/monster-warlord.jpg');
    }

    context.BadMonsters.push(Skullhead);




  })(window.MonsterFight);
