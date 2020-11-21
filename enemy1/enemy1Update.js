export default function enemy1Update(game) {
  let {
    width,
    height
  } = game.game.config;

  if (game.enemies1) {
    game.enemies1.getChildren().forEach((enemy, i) => {
      if (enemy.getCenter().y > height * 1.1) {
        enemy.enemy1State.health = 0;
      }
      if (enemy.enemy1State.health > 0 && Math.abs(enemy.x - game.player.x) < 1000 && Math.abs(enemy.x - game.player.x) > 200) {
        //enemy1 positions
        // if player to left of enemy AND enemy moving to right (or not moving)
        if (game.player.x < enemy.x) {
          // move enemy to left
          enemy.enemy1State.position = 'left';
          enemy.anims.play('left_enemy1', true);
          enemy.flipX = true;
          enemy.body.setVelocityX(-250 * (i * 0.05 + 1));
        }
        // if player to right of enemy AND enemy moving to left (or not moving)
        else if (game.player.x > enemy.x) {
          // move enemy to right
          enemy.enemy1State.position = 'right';
          enemy.flipX = false;
          enemy.anims.play('right_enemy1', true);
          enemy.body.setVelocityX(250 * (i * 0.05 + 1));
        }
        //idle
        else if (game.player.x === enemy.x) {
          enemy.body.setVelocityX(0);
          enemy.anims.play('idle_enemy1', true);
        }

      }
      else if (enemy.enemy1State.health === 0) {
        enemy.anims.play('dead_enemy1', true);
        enemy.body.touching.down && enemy.body.setVelocityY(-800);
        enemy.enemy1State.position === 'left' ? enemy.body.setVelocityX(550) : enemy.body.setVelocityX(-550);
        game.time.addEvent({
          delay: 1000,
          callback: () => {
            enemy.destroy();
          },
          loop: false
        });
      }
      else if (enemy.enemy1State.health > 0) {
        enemy.body.setVelocityX(0);
        enemy.anims.play('idle_enemy1', true);
        if (game.player.x < enemy.x) {
          enemy.enemy1State.position = 'left';
          enemy.flipX = true;
        } else {
          enemy.enemy1State.position = 'right';
          enemy.flipX = false;
        }
      }
    });
  }

}
