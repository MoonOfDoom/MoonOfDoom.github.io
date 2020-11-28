export default function gunfire(game) {
  //bullet movements
  function create_callback(bullet, player, playerState) {
    if (bullet && bullet[0] && bullet[0].body) {
      bullet[0].visible = true;
      bullet[0].x = playerState.position === 'left' ? player.getCenter().x - 80 : player.getCenter().x + 80;
      bullet[0].y = player.getCenter().y - 7;
      if (playerState.crouch) bullet[0].y = player.getCenter().y + 78;
      if (playerState.position === 'left') {
        bullet[0].body.velocity.x = -2000;
        bullet[0].flipX = true;
      }
      else if (playerState.position === 'right') {
        bullet[0].body.velocity.x = 2000;
        bullet[0].flipX = false;
      }
      if (playerState.cross) {
        bullet[0].y = player.getCenter().y - 70;
        if (playerState.position === 'right') {
          bullet[0].body.velocity.x = 1200;
          bullet[0].angle = -45;
        }
        else {
          bullet[0].body.velocity.x = -1200;
          bullet[0].angle = 45;
        }
        bullet[0].body.velocity.y = -600;
      }
      else if (playerState.lookup) {
        bullet[0].x = playerState.position === 'left' ? player.getCenter().x - 10 : player.getCenter().x + 10;
        bullet[0].y = player.getCenter().y - 107;
        bullet[0].body.velocity.x = 0;
        bullet[0].body.velocity.y = -1500;
        playerState.position === 'right' ? bullet[0].angle = -90 : bullet[0].angle = 90;
      }
      game.playerState.ammo--;
      //bullet destroy
      bullet[0].body.setSize(5,5,true);
      game.physics.add.overlap(bullet[0],game.enemies1,() => {
        bullet[0].destroy();
      });
      if (
        bullet[0].x > game.cameras.main.worldView.x + 1200
        || bullet[0].x < game.cameras.main.worldView.x
        || bullet[0].y < game.cameras.main.worldView.y
      ) bullet[0].destroy();
    }
  }

  //shoot
  if (game.playerState.health > 0 && game.ctrlKey.isDown && game.playerState.shoot && game.playerState.ammo > 0) {
    game.bullet = game.bullets.createFromConfig({
      classType: Phaser.GameObjects.Image,
      key: 'bullet',
      frame: null,
      visible: false,
      active: true,
      repeat: 0,
      createCallback: create_callback(game.bullet, game.player, game.playerState),
      setXY: {
        x: game.player.getCenter().x,
        y: game.player.getCenter().y - 7,
        stepX: 0,
        stepY: 0
      },
      setScale: {
        x: 0.6,
        y: 0.4
      }
    });
    game.gunSound.play();
    game.playerState.shoot = false;
  }

  //reload
  if (game.cursors.space.isDown && game.playerState.ammo === 0 && !game.playerState.reloading) {
    game.playerState.reloading = true;
    game.time.addEvent({
      delay: 2000,
      callback: () => {
        game.playerState.ammo = 60;
        game.playerState.reloading = false;
      },
      loop: false
    });
  }
}
