// Enemies our player must avoid
var Enemy = function (x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.imageWidth = 70;
    this.imageHeight = 90;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x += this.speed * dt;
    if (this.x >= 500) {
        this.x = 1;
        this.x += Math.floor((Math.random() * this.speed));
    }
    if (Math.abs(Math.floor(player.x) - Math.floor(this.x)) <= 50 &&
        Math.abs(Math.floor(player.y) - Math.floor(this.y)) <= 20) {
        player.x = 200;
        player.y = 300;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y, this.imageWidth, this.imageHeight);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(x, y) {
        this.sprite = 'images/char-princess-girl.png';
        this.x = x;
        this.y = y;

    }
    update(x, y) {
        //if the player moves to the right
        if (this.x > 400) {
            this.x = 400;
        }
        //if the player moves to the left of the canvas
        else if (this.x <= 1) {
            this.x = 1;
        }
        //if the the player tries to move up to the canvas
        else if (this.y <= 5) {
            this.y = 5;

        }
        //if the player tries to move down to the canvas
        else if (this.y >= 400) {
            this.y = 400;
        }
        //if the player win the game
        if (this.y <= 8) {
            //seleting modal from the dom
            const modal = document.getElementById('main');
            //the close icon in  model
            const close = document.querySelector('.close');
            this.x = 200;
            this.y = 300;
            //reseting speed to zero
            allEnemies.forEach(function (element) {
                element.speed = 0;
            });
            modal.style.display = "block";
            close.addEventListener('click', closeModal);

            function closeModal() {
                modal.style.display = "none";
                allEnemies.forEach(function (element) {
                    element.speed = Math.floor(Math.random() * 70 + 100);
                });

            }
        }

    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    }
    handleInput(key) {
        switch (key) {
            case 'left':
                this.update(this.x -= 50);
                break;
            case 'right':
                this.update(this.x += 50);
                break;
            case 'up':
                this.update(this.y -= 50);
                break;
            case 'down':
                this.update(this.y += 50);

        }

    }

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


const allEnemies = [];
for (i = 0; i <= 2; i++) {
    let xDirectION = Math.floor(Math.random() * 20);
    let YDirection = 100 + 80 * i;
    let speed = Math.floor(Math.random() * 70 + 100);
    allEnemies.push(new Enemy(xDirectION, YDirection, speed))
}

const player = new Player(200, 300);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});