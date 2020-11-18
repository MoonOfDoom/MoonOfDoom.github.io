export default function enemy1Setup(game) {
  game.enemy1 = game.physics.add.sprite(400, 0, 'enemy1').setScale(0.13);
  game.enemy1.setSize(500,1200,false);
  game.enemy1.setOffset(250,150);
  game.enemy1.setCollideWorldBounds(true);
  game.enemy1.setDepth(1);

  //enemy1 initial state
  game.enemy1State = {
    position: 'right',
    shoot: false,
    health: 20
  }

  //lasers
  game.lasers = game.physics.add.group({
    classType: Phaser.GameObjects.Image,
    defaultKey: 'laser',
    defaultFrame: null,
    active: true,
    maxSize: -1,
    runChildUpdate: false,
    createCallback: null,
    removeCallback: null,
    createMultipleCallback: null,
    allowGravity: false
  });

  //lasers limiter
  game.time.addEvent({
    delay: 100,
    callback: () => {
      game.enemy1State.shoot = true;
    },
    loop: true
  });
}
