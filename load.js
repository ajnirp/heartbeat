var loadState = {
  preload: function () {
    game.load.atlasJSONHash('player', 'assets/sprites/player/player.png', 'assets/sprites/player/player.json');
//    game.load.spritesheet('runleft', 'assets/player/running/left.png', 157, 223, 3);
//    game.load.spritesheet('runright', 'assets/player/running/right.png', 157, 223, 3);
  },
  
  create: function () {
    console.log("load create");
    game.state.start('menu');
  }
}