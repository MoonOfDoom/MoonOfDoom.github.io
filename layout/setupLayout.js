export default function layout(game) {

  let {
    width,
    height
  } = game.game.config;

  //message display
  game.showMsg = false;
  //flash message
  game.time.addEvent({
    delay: 500,
    callback: () => {
      game.showMsg = !game.showMsg;
    },
    loop: true
  });
  game.reloadFlash = game.add.image(width / 2, height * 0.2, 'reload');
  game.reloadFlash.setScrollFactor(0);
  game.energyCont = game.add.image(120, 40, 'energyCont').setScale(0.3);
  game.energyCont.setScrollFactor(0);
  game.energyBar = game.add.image(138, 43, 'energyBar').setScale(0.3);
  game.energyBar.setScrollFactor(0);
  game.energyMask = game.add.image(138, 43, 'energyBar').setScale(0.3);
  game.energyMask.visible = false;
  game.energyMask.setScrollFactor(0);
  game.energyBar.mask = new Phaser.Display.Masks.BitmapMask(game, game.energyMask);
  game.reloadFlash.visible = false;
  game.reloading = game.add.image(width / 2, height * 0.2, 'reloading').setScale(0.8);
  game.reloading.setScrollFactor(0);
  game.reloading.visible = false;
  game.scoreText = game.add.text(width/1.25, 20, 'score: 000000', { fontFamily: 'pixeboy', stroke: '#333', strokeThickness: 10, fontSize: '30px', fill: '#fff' });
  game.scoreText.setScrollFactor(0);
}
