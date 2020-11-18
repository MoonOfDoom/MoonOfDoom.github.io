export default function enemy1Update(game) {
  let {
    width,
    height
  } = game.game.config;

  if (game.enemy1.getCenter().y > height * 1.1) {
    game.enemy1State.health = 0;
  }
  if (game.enemy1State.health > 0) {
    //enemy1 positions
    // if player to left of enemy AND enemy moving to right (or not moving)
    if (game.player.x < game.enemy1.x) {
        // move enemy to left
        game.enemy1State.position = 'left';
        game.enemy1.anims.play('left_enemy1', true);
        game.enemy1.flipX = true;
        game.enemy1.setVelocityX(-250);
    }
    // if player to right of enemy AND enemy moving to left (or not moving)
    else if (game.player.x > game.enemy1.x) {
        // move enemy to right
        game.enemy1State.position = 'right';
        game.enemy1.flipX = false;
        game.enemy1.anims.play('right_enemy1', true);
        game.enemy1.setVelocityX(250);
    }
    //idle
    else if (game.player.x === game.enemy1.x) {
      game.enemy1.setVelocityX(0);
      game.enemy1.anims.play('idle_enemy1', true);
    }

  } else {
    game.enemy1.setVelocityX(0);
    game.enemy1.setVelocityY(0);
  }

}
