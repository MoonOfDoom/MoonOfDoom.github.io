export default function updateLevel(game) {
  let {
    width,
    height
  } = game.game.config;

  //camera movements
  game.camera.setBounds(0, -1.01 * height, width * 100, height * 2);
  game.camera.startFollow(game.player);

  //scene movements
  game.tree1.tilePositionX = game.camera.scrollX * 0.6;
  game.tree1.tilePositionY = game.camera.scrollY * 0.6;

  game.tree2.tilePositionX = game.camera.scrollX * 0.4;
  game.tree2.tilePositionY = game.camera.scrollY * 0.4;

  game.tree3.tilePositionX = game.camera.scrollX * 0.2;
  game.tree3.tilePositionY = game.camera.scrollY * 0.2;

  game.water.tilePositionX = game.camera.scrollX;

  //banner lights flicker
  game.banner.anims.play('flicker', true);
}
