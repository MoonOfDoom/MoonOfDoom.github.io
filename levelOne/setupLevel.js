export default function setupLevel(game) {
  //world bounds
  game.physics.world.setBounds(0, 0, screen.width * 100, screen.height * 1.3, true, true, true, true);

  //background
  game.sky = game.add.tileSprite(screen.width / 2, screen.height / 2, screen.width, screen.height, 'sky');
  game.sky.setScrollFactor(0);

  //moon
  game.moon = game.add.sprite(screen.width / 2, screen.height / 5, 'moon');
  game.moon.setScrollFactor(0);

  //trees
  game.tree3 = game.add.tileSprite(screen.width / 2, screen.height * 0.5, screen.width, screen.height * 2, 'tree3').setScale(1);
  game.tree3.setScrollFactor(0);

  game.tree2 = game.add.tileSprite(screen.width / 2, screen.height * 0.5, screen.width, screen.height * 2, 'tree2').setScale(1);
  game.tree2.setScrollFactor(0);

  game.tree1 = game.add.tileSprite(screen.width / 2, screen.height * 0.5, screen.width, screen.height * 2, 'tree1').setScale(1);
  game.tree1.setScrollFactor(0);

  //platforms
  game.platforms = game.physics.add.staticGroup();
  game.platforms.create(screen.width / 2, screen.height * 0.96, 'ground').setScale(screen.width * 0.009, 1).refreshBody();
  game.platforms.create(screen.width / 2 + screen.width * 0.009 *154 + 600, screen.height * 0.96, 'ground').setScale(screen.width * 0.009, 1).refreshBody();

  //lab banner
  game.banner = game.add.sprite(245, 480, 'banner').setScale(0.15);

  //lab
  game.add.sprite(100, screen.height * 0.38, 'lab').setScale(0.21);

  //water
  game.water = game.add.tileSprite(screen.width / 2, screen.height * 0.98, screen.width, 68, 'water');
  game.water.setScrollFactor(0,1);

  //land
  game.add.tileSprite(screen.width / 2, screen.height * 0.95, screen.width * 0.009 * 154, 68, 'land');
  game.add.tileSprite(screen.width / 2 + screen.width * 0.009 *154 + 600, screen.height * 0.95, screen.width * 0.009 * 154, 68, 'land');
}
