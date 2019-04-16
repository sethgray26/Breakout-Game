import React, { Component } from 'react';

class TheCanvas extends Component {
    render() {
        return (
            <div>
                <canvas id='myCanvas' width='480' height='320'></canvas>
            </div>
        );
    };
};

export default TheCanvas;