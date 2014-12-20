var bootState = {
  preload: function () {
  },

  create: function () {
    game.stage.backgroundColor = '#EDEDED';
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.state.start('load');
  }
};