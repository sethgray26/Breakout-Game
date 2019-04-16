import React, { Component } from 'react';
import TheVariables from './TheVariables';

class TheMethods extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);

    }

    drawBricks = () => {
        for (var column = 0; column < brickColumnCount; column++) {
            for (var row = 0; row < brickRowCount; row++) {
                if (bricks[column][row].status === 1) {
                    var brickX = (column * (brickWidth + brickPadding)) + brickOffsetLeft;
                    var brickY = (row * (brickHeight + brickPadding)) + brickOffsetTop;
                    bricks[column][row].x = brickX;
                    bricks[column][row].y = brickY;
                    ctx.beginPath();
                    ctx.rect(brickX, brickY, brickWidth, brickHeight);
                    ctx.fillStyle = "#0095DD";
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    }

    drawBall = () => {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    drawPaddle = () => {
        ctx.beginPath();
        ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
        ctx.fillStyle = '#0095DD';
        ctx.fill();
        ctx.closePath()
    }

    draw = () => {
        if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }

        if (y + dy < ballRadius) {
            dy = -dy;
        } else if (y + dy > canvas.height - ballRadius) {
            if (x > paddleX && x < paddleX + paddleWidth) {
                dy = -dy;
            } else {
                lives--;
                if (!lives) {
                    alert("GAME OVER");
                    document.location.reload();

                }
                else {
                    x = canvas.width / 2;
                    y = canvas.height - 30;
                    dx = 2;
                    dy = -2;
                    paddleX = (canvas.width - paddleWidth) / 2;
                }
            }
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.drawBricks();
        this.drawBall();
        this.drawPaddle();
        this.drawScore();
        this.drawLives();
        this.collisionDetection();

        x += dx;
        y += dy;

        if (rightPressed && paddleX < canvas.width - paddleWidth) {
            paddleX += 8;
        }
        else if (leftPressed && paddleX > 0) {
            paddleX -= 8;
        }
        requestAnimationFrame(this.draw);
    }

    collisionDetection = () => {
        for (var column = 0; column < brickColumnCount; column++) {
            for (var row = 0; row < brickRowCount; row++) {
                var b = bricks[column][row];
                if (b.status === 1) {
                    if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                        dy = -dy;
                        b.status = 0;
                        score++;
                        if (score === brickRowCount * brickColumnCount) {
                            alert('YOU WIN, WOOT WOOT!');
                            document.location.reload();

                        }
                    }
                }
            }
        }
    }

    drawScore = () => {
        ctx.font = '16px Arial';
        ctx.fillStyle = '#0095DD'
        ctx.fillText('Score: ' + score, 8, 20)
    }

    drawLives = () => {
        ctx.font = '16px Arial';
        ctx.fillStyle = '#0095DD'
        ctx.fillText('Lives: ' + lives, canvas.width - 65, 20)
    }
    render() {
        return (
            <div>
                <TheVariables />
            </div>
        );
    }
}

export default TheMethods;