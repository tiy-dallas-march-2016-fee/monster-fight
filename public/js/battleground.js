'use strict';

(function(context) {

  var battleground = {};

  var $startButton;

  var $badGuyImage;
  var $badGuyHitpoints;
  var $badGuyMessaging;

  var $goodGuyImage;
  var $goodGuyHitpoints;
  var $goodGuyMessaging;

  var goodMonster;
  var badMonster;

  var roundInterval;

  battleground.init = function init() {
    $startButton = $('#start-button');
    $startButton.on('click', battleground.startBattle)

    $goodGuyImage = $('.good-guys .avatar');
    $goodGuyHitpoints = $('.good-guys .hit-points')
    $goodGuyMessaging = $('.good-guys .monster-messaging');

    $badGuyImage = $('.bad-guys .avatar');
    $badGuyHitpoints = $('.bad-guys .hit-points');
    $badGuyMessaging = $('.bad-guys .monster-messaging');
  }

  battleground.startBattle = function startBattle() {
    $startButton.hide();

    // Generate random number to choose good monster
    goodMonster = context.GoodMonsters[Math.floor(Math.random() * context.GoodMonsters.length)].create();
    $goodGuyImage.attr('src', goodMonster.imageUrl);
    // Generate random number to choose bad monster.
    badMonster = context.BadMonsters[Math.floor(Math.random() * context.BadMonsters.length)].create();
    $badGuyImage.attr('src', badMonster.imageUrl);

    $goodGuyMessaging.text('');
    $badGuyMessaging.text('');
    updateHitpoints();

    roundInterval = setInterval(playRound, 2000);
  }

  function playRound() {

    $goodGuyMessaging.text(goodMonster.takeDamage(Math.floor(Math.random() * 5)));
    $badGuyMessaging.text(badMonster.takeDamage(Math.floor(Math.random() * 5)));

    updateHitpoints();

    if (goodMonster.hitpoints <= 0 || badMonster.hitpoints <= 0) {
      $startButton.show();
      clearInterval(roundInterval);
    }
  }

  function updateHitpoints() {
    $badGuyHitpoints.text(badMonster.hitpoints);
    $goodGuyHitpoints.text(goodMonster.hitpoints);
  }

  context.Battleground = battleground;

})(window.MonsterFight);
