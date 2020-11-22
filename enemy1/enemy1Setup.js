export default function enemy1Setup(game) {
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
    repeat: 5,
    createCallback: null,
    setXY: {
      x: 0,
      y: 100,
      stepX: 0,
      stepY: 0
    },
    setScale: {
      x: 0.3,
      y: 0.3
    }
  });

  let enemyPos = [100,1300,2000,2600,2900,3500]

  //damage to player
  game.physics.add.overlap(game.lasers,game.player,() => {
    game.playerState.health-=10;
  });

  game.enemies1.getChildren().forEach((enemy, i) => {
    game.physics.add.overlap(game.bullets,enemy,() => {
      enemy.enemy1State.health--;
    });
    enemy.x = enemyPos[i];
    enemy.body.setSize(200,600,true);
    enemy.body.setOffset(150,30);
    enemy.body.setCollideWorldBounds(true);
    enemy.setDepth(1);
    enemy.enemy1State = {
      position: 'right',
      shoot: false,
      health: 20
    }
    //lasers limiter
    game.time.addEvent({
      delay: 1000,
      callback: () => {
        enemy.enemy1State.shoot = true;
      },
      loop: true
    });
    console.log(enemy);
  });

}
