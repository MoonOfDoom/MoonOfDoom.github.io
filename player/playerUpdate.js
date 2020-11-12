export default function playerUpdate(game) {
  //player positions
  //landed
  if (game.player.body.touching.down) game.playerState.landed = true;
  else game.playerState.landed = false;

  //mid-air anim
  if (!game.playerState.landed) game.player.anims.play('jump', true);

  //jump
  if (game.cursors.shift.isDown) {
    if (game.playerState.landed) game.player.setVelocityY(-1030);
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
  else if (game.cursors.down.isDown) {
    game.playerState.crouch = true;
    if (game.playerState.landed) {
      game.player.setVelocityX(0);
      game.player.anims.play('crouch', true);
    }
  }

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
