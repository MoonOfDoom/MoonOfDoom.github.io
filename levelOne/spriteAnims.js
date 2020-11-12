export default function spriteAnims(game) {

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
