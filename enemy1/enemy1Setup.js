export default function enemy1Setup(game) {
  // //lasers
  // game.lasers = game.physics.add.group({
  //   classType: Phaser.GameObjects.Image,
  //   defaultKey: 'laser',
  //   defaultFrame: null,
  //   active: true,
  //   maxSize: -1,
  //   runChildUpdate: false,
  //   createCallback: null,
  //   removeCallback: null,
  //   createMultipleCallback: null,
  //   allowGravity: false
  // });
  //
  // //lasers limiter
  // game.time.addEvent({
  //   delay: 100,
  //   callback: () => {
  //     game.enemy1State.shoot = true;
  //   },
  //   loop: true
  // });
  console.log(game.platforms);

  game.enemies1 = game.physics.add.group({
    classType: Phaser.GameObjects.Sprite,
    defaultKey: 'enemy1',
    defaultFrame: null,
    active: true,
    maxSize: -1,
    runChildUpdate: true,
    createCallback: null,
    removeCallback: null,
    createMultipleCallback: null,
  });

  game.enemy1 = game.enemies1.createFromConfig({
    classType: Phaser.GameObjects.Sprite,
    key: 'enemy1',
    frame: null,
    visible: true,
    active: true,
    repeat: 2,
    createCallback: null,
    setXY: {
      x: 0,
      y: 100,
      stepX: 0,
      stepY: 0
    },
    setScale: {
      x: 0.13,
      y: 0.13
    }
  });

  game.enemies1.getChildren().forEach((enemy, i) => {
    enemy.x = i * 1000 + 500;
    enemy.body.setSize(500,1200,false);
    enemy.body.setOffset(250,150);
    enemy.body.setCollideWorldBounds(true);
    enemy.setDepth(1);
    enemy.enemy1State = {
      position: 'right',
      shoot: false,
      health: 20
    }
  });

}
