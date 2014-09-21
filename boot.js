var bootState = {
  preload: function () {
  },
  
  create: function () {
    console.log("boot create");
    game.stage.backgroundColor = '#EDEDED';
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.state.start('load');
  }
};