import React, { Component } from 'react';
import pixi from 'pixi.js';
import {Stage, Sprite, VectorText} from 'react-pixi';

const sprite = require('../../assets/bubble.png');

export default class Atom extends Component {
    render() {
        const {
            id, x, y ,rotation
        } = this.props;
        return (
            <Sprite
                image={sprite}
                x={x}
                y={y}
                rotation={rotation}
            />
        );
    }
}
