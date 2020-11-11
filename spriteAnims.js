export default function spriteAnims(game) {

  //player animations
  game.anims.create({
    key: 'left',
    frames: game.anims.generateFrameNumbers('dude', {
      start: 1,
      end: 6
    }),
    frameRate: 20,
    repeat: -1
  });

  game.anims.create({
    key: 'idle',
    frames: [{
      key: 'dude',
      frame: 0
    }],
    frameRate: 20
  });

  game.anims.create({
    key: 'right',
    frames: game.anims.generateFrameNumbers('dude', {
      start: 1,
      end: 6
    }),
    frameRate: 20,
    repeat: -1
  });

  game.anims.create({
    key: 'cross',
    frames: game.anims.generateFrameNumbers('dude', {
      start: 17,
      end: 22
    }),
    frameRate: 20,
    repeat: -1
  });

  game.anims.create({
    key: 'jump',
    frames: game.anims.generateFrameNumbers('dude', {
      start: 8,
      end: 14
    }),
    frameRate: 65,
    repeat: -1
  });

  game.anims.create({
    key: 'lookup',
    frames: [{
      key: 'dude',
      frame: 16
    }],
    frameRate: 20,
    repeat: -1
  });

  game.anims.create({
    key: 'crouch',
    frames: [{
      key: 'dude',
      frame: 24
    }],
    frameRate: 20,
    repeat: -1
  });

  //lab banner animation
  game.anims.create({
    key: 'flicker',
    frames: game.anims.generateFrameNumbers('banner', {
      start: 0,
      end: 2
    }),
    frameRate: 5,
    repeat: -1
  });
}
