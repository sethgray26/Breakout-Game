var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;
var dx = 2.5;
var dy = -2.5;
var x = canvas.width / 2;
var y = canvas.height - 30;
var brickRowCount = 4;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;
var lives = 3;
var bricks = [];
for (var column = 0; column < brickColumnCount; column++) {
    bricks[column] = [];
    for (var row = 0; row < brickRowCount; row++) {
        bricks[column][row] = { x: 0, y: 0, status: 1 };
    }
}