export default function playerUpdate(game) {
  let {
    width,
    height
  } = game.game.config;

  if (game.player.getCenter().y > height * 1.1) {
    game.playerState.health = 0;
  }
  if (game.playerState.health > 0) {
    //player positions
    //landed
    if (game.player.body.touching.down) game.playerState.landed = true;
    else game.playerState.landed = false;

    //mid-air anim
    if (!game.playerState.landed) game.player.anims.play('jump', true);

    //jump
    if (Phaser.Input.Keyboard.JustDown(game.cursors.shift)) {
      if (game.playerState.landed) {
        game.player.setVelocityY(-1030);
        game.jumpSound.play();
      }
    }

    //left
    if (game.cursors.left.isDown) {
      game.playerState.position = 'left';
      game.player.flipX = true;
      game.player.setVelocityX(-550);
      if (game.cursors.up.isDown) game.playerState.cross = true;
      if (game.playerState.landed) {
        if (game.cursors.up.isDown) {
          game.player.anims.play('cross', true);
        } else game.player.anims.play('left', true);
      }
    }

    //right
    else if (game.cursors.right.isDown) {
      game.playerState.position = 'right';
      game.player.flipX = false;
      game.player.setVelocityX(550);
      if (game.cursors.up.isDown) game.playerState.cross = true;
      if (game.playerState.landed) {
        if (game.cursors.up.isDown) {
          game.player.anims.play('cross', true);
        } else game.player.anims.play('right', true);
      }
    }

    //crouch
    // else if (game.cursors.down.isDown) {
    //   game.playerState.crouch = true;
    //   if (game.playerState.landed) {
    //     game.player.setVelocityX(0);
    //     game.player.anims.play('crouch', true);
    //   }
    // }

    //lookup
    else if (game.cursors.up.isDown) {
      game.playerState.lookup = true;
      if (game.playerState.landed) {
        game.player.setVelocityX(0);
        game.player.anims.play('lookup', true);
      }
    }

    //idle
    else {
      if (game.playerState.landed) {
        game.player.setVelocityX(0);
        game.player.anims.play('idle', true);
      }
    }

    //crouch, lookup and cross reset
    if (game.cursors.up.isUp) game.playerState.lookup = false;
    if (game.cursors.up.isUp || (game.cursors.left.isUp && game.cursors.right.isUp)) game.playerState.cross = false;
    if (game.cursors.down.isUp) game.playerState.crouch = false;
  }
  else {
    if (game.player.getCenter().y < height * 1.1 && game.playerState.deadAnim) {
      game.time.addEvent({
        delay: 100,
        callback: () => {
          if (game.player.body.touching.down) game.playerState.deadAnim = false;
        },
        loop: false
      });
      game.player.anims.play('jump', true);
      game.playerState.position === 'left' ? game.player.setVelocityX(400) : game.player.setVelocityX(-400);
      if (game.player.body.touching.down) game.player.setVelocityY(-1000);
    }
    else {
      game.player.anims.play('dead', true);
      game.player.setVelocityX(0);
      game.player.setVelocityY(1000);
    }
  }

}
