var loadState = {
  preload: function () {
      game.load.image('player', 'assets/sprites/player/block.png');
      game.load.image('tile', 'assets/kenney-sprites/PNG/Stone elements/elementStone011.png');
    //game.load.atlasJSONHash('player', 'assets/sprites/player/player.png', 'assets/sprites/player/player.json');
//    game.load.spritesheet('runleft', 'assets/player/running/left.png', 157, 223, 3);
//    game.load.spritesheet('runright', 'assets/player/running/right.png', 157, 223, 3);
  },

  create: function () {
    game.state.start('menu');
  }
}