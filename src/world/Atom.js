import React, { Component } from 'react';
import pixi from 'pixi.js';
import {Stage, Sprite, VectorText} from 'react-pixi';

const sprites = {
    plain: require('../../assets/bubble.png'),
    blue: require('../../assets/bubble-blue.png'),
    green: require('../../assets/bubble-green.png'),
}


const getSprite = (key) => {
    return sprites[key];
}

export default class Atom extends Component {
    render() {
        const {
            x, y, sprite
        } = this.props;
        const image = getSprite(sprite);
        return (
            <Sprite
                image={image}
                x={x}
                y={y}
            />
        );
    }
}
