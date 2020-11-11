export default function playerSetup(game) {
  game.player = game.physics.add.sprite(200, 0, 'dude').setScale(0.3);
  game.player.setCollideWorldBounds(true);
  game.player.setDepth(1);

  //player initial state
  game.playerState = {
    landed: true,
    walking: false,
    jumping: false,
    position: 'right',
    crouch: false,
    lookup: false,
    cross: false,
    firing: false,
    shoot: false
  }

  //bullets
  game.bullets = game.physics.add.group({
    classType: Phaser.GameObjects.Image,
    defaultKey: 'particle',
    defaultFrame: null,
    active: true,
    maxSize: 5,
    runChildUpdate: false,
    createCallback: null,
    removeCallback: null,
    createMultipleCallback: null,
    allowGravity: false
  });

  //bullets limiter
  game.time.addEvent({
    delay: 100,
    callback: () => {
      game.playerState.shoot = true;
    },
    loop: true
  });
}
