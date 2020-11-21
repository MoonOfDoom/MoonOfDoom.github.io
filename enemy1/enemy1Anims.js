export default function enemy1Anims(game) {

  //enemy animations
  game.anims.create({
    key: 'left_enemy1',
    frames: game.anims.generateFrameNumbers('enemy1', {
      start: 1,
      end: 6
    }),
    frameRate: 20,
    repeat: -1
  });

  game.anims.create({
    key: 'idle_enemy1',
    frames: [{
      key: 'enemy1',
      frame: 0
    }],
    frameRate: 20
  });

  game.anims.create({
    key: 'dead_enemy1',
    frames: [{
      key: 'enemy1',
      frame: 7
    }],
    frameRate: 20
  });

  game.anims.create({
    key: 'right_enemy1',
    frames: game.anims.generateFrameNumbers('enemy1', {
      start: 1,
      end: 6
    }),
    frameRate: 20,
    repeat: -1
  });

}
