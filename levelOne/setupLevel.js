export default function setupLevel(game) {
  //world bounds
  game.physics.world.setBounds(0, 0, screen.width * 100, screen.height, true, true, true, true);

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
  game.platforms.create(screen.width / 2, screen.height, 'ground').setScale(screen.width * 100, 4).refreshBody();

  //lab banner
  game.banner = game.add.sprite(245, 480, 'banner').setScale(0.15);

  //lab
  game.add.sprite(100, screen.height * 0.38, 'lab').setScale(0.21);

  //land
  game.add.tileSprite(0, screen.height * 0.95, screen.width * 100, 169, 'land').setScale(0.4);
}
