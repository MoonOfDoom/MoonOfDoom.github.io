export default function laserfire(game) {
  //laser movements
  function create_callback(laser, enemy1, enemy1State) {
    if (laser && laser[0] && laser[0].body) {
      laser[0].visible = true;
      laser[0].x = enemy1.getCenter().x;
      laser[0].y = enemy1.getCenter().y;
      if (enemy1State.position === 'left') {
        laser[0].body.velocity.x = -1000;
        laser[0].flipX = true;
      }
      else if (enemy1State.position === 'right') {
        laser[0].body.velocity.x = 1000;
        laser[0].flipX = false;
      }
    }
  }

  //shoot
  game.enemies1.getChildren().forEach((enemy, i) => {
    if (enemy.enemy1State.shoot && enemy.enemy1State.health > 0 && game.playerState.health > 0 && Math.abs(enemy.x - game.player.x) < 500) {
      game.laser = game.lasers.createFromConfig({
        classType: Phaser.GameObjects.Image,
        key: 'laser',
        frame: null,
        visible: false,
        active: true,
        repeat: 0,
        createCallback: create_callback(game.laser, enemy, enemy.enemy1State),
        setXY: {
          x: enemy.getCenter().x,
          y: enemy.getCenter().y,
          stepX: 0,
          stepY: 0
        },
        setScale: {
          x: 0.6,
          y: 0.4
        }
      });
      enemy.enemy1State.shoot = false;
      game.zapSound.play();
    }
  });


  //lasers destroy

  if (game.lasers.children.entries) {
    for (let bul of game.lasers.children.entries) {
      bul.body.setSize(5,5,true);
      game.physics.add.overlap(bul,game.player,() => {
        if (bul.visible) game.playerState.health -= 5;
        bul.destroy();
      });
      if (
        bul.x > game.cameras.main.worldView.x + 1500
        || bul.x < game.cameras.main.worldView.x
        || bul.y < game.cameras.main.worldView.y
      ) bul.destroy();
    }
  }
}
