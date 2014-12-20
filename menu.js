var menuState = {
  create: function () {
    // var titleText = game.add.bitmapText(0, 0, '04b19', 'Space Shooter', 64);
    // titleText.x = game.width/2 - titleText.textWidth/2;
    // titleText.y = game.height/2 - titleText.textHeight/2 - 50;

    // var pressStartText = game.add.bitmapText(0, 0, '04b19', 'press space to start', 24);
    // pressStartText.x = game.width/2 - pressStartText.textWidth/2;
    // pressStartText.y = game.height/2 - pressStartText.textHeight/2 + 40;
    game.state.start('play');
  }
};