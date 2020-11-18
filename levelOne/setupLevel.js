export default function setupLevel(game) {
  let {
    width,
    height
  } = game.game.config;

  //world bounds
  game.physics.world.setBounds(0, -200, width * 100, height * 2, true, true, true, true);

  //background
  game.sky = game.add.tileSprite(width / 2, height / 2, width, height, 'sky');
  game.sky.setScrollFactor(0);

  //moon
  game.moon = game.add.sprite(width / 2, height / 5, 'moon');
  game.moon.setScrollFactor(0);

  //trees
  game.tree3 = game.add.tileSprite(width / 2, height * 0.4, width, height * 2, 'tree3').setScale(1);
  game.tree3.setScrollFactor(0);

  game.tree2 = game.add.tileSprite(width / 2, height * 0.4, width, height * 2, 'tree2').setScale(1);
  game.tree2.setScrollFactor(0);

  game.tree1 = game.add.tileSprite(width / 2, height * 0.4, width, height * 2, 'tree1').setScale(1);
  game.tree1.setScrollFactor(0);

  //platforms
  game.platforms = game.physics.add.staticGroup();
  game.platforms.create(width / 2, height * 0.96, 'ground').setScale(width * 0.009, 1).refreshBody();
  game.platforms.create(width / 2 + width * 0.009 *154 + 600, height * 0.96, 'ground').setScale(width * 0.009, 1).refreshBody();

  //boxes
  game.boxes = game.physics.add.staticGroup();
  game.boxes.create(width / 2, height * 0.6, 'box').refreshBody();
  game.boxes.create(width / 2 + 70, height * 0.6, 'box').refreshBody();
  game.boxes.create(width / 2 + 140, height * 0.6, 'box').refreshBody();

  //lab banner
  game.banner = game.add.sprite(245, 480, 'banner').setScale(0.15);

  //lab
  game.add.sprite(100, height * 0.38, 'lab').setScale(0.21);

  //water
  game.water = game.add.tileSprite(width / 2, height * 0.98, width, 68, 'water');
  game.water.setScrollFactor(0,1);

  //land
  game.add.tileSprite(width / 2, height * 0.95, width * 0.009 * 154, 68, 'land');
  game.add.tileSprite(width / 2 + width * 0.009 *154 + 600, height * 0.95, width * 0.009 * 154, 68, 'land');
}
