var Menu = {

  preload : function() {
    // Loading images is required so that later on we can create sprites based on the them.
    // The first argument is how our image will be refered to,
    // the second one is the path to our file.
    game.load.image('man', '/images/man.png');
  },

  create: function () {
    //Set background color
    game.stage.backgroundColor = "#1BDCFF";

    //Add player to screen, set size
    man = game.add.sprite(game.world.centerX, game.world.centerY, 'man');
    man.width = 42;
    man.height = 50;
  },

  update: function() {
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
      man.x -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
      man.x += 4;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
      man.y -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
      man.y += 4;
    }
  }

};

var game;
var man;

// Create a new game instance 600px wide and 450px tall:
game = new Phaser.Game(600, 450, Phaser.AUTO, '');

// First parameter is how our state will be called.
// Second parameter is an object containing the needed methods for state functionality
game.state.add('Menu', Menu);

game.state.start('Menu');
