import React, { Component } from 'react';

class TheVariables extends Component {
    constructor(props) {
        super(props)
    }
    render() {
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
        var ballRadius = 10;
        var bricks = [];
        for (var column = 0; column < brickColumnCount; column++) {
            bricks[column] = [];
            for (var row = 0; row < brickRowCount; row++) {
                bricks[column][row] = { x: 0, y: 0, status: 1 };
            }
        }

        function keyDownHandler(e) {
            if (e.key === "Right" || e.key === 'ArrowRight') {
                rightPressed = true;
            }
            else if (e.key === 'Left' || e.key === 'ArrowLeft') {
                leftPressed = true;
            }
        }

        function keyUpHandler(e) {
            if (e.key === "Right" || e.key === "ArrowRight") {
                rightPressed = false;
            }
            else if (e.key === "Left" || e.key === "ArrowLeft") {
                leftPressed = false;
            }
        }


        return (
            <div>

            </div>
        );
    }
}

export default TheVariables;