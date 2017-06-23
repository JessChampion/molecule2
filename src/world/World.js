import React, { Component } from 'react';
import pixi from 'pixi.js';
import {Stage, Sprite, VectorText} from 'react-pixi';

import Atom from './Atom';

const SPEED = 0.005;
const testJson = {
    people: [
        {
            id: 1,
            firstName: 'Jess',
            lastName: 'Champion',
            team: [
                'space-ops'
            ]
        },
        {
            id: 2,
            firstName: 'Tim',
            lastName: 'Kung',
            team: [
                'quantum-dragons'
            ]
        },
        {
            id: 3,
            firstName: 'Tobie',
            lastName: 'Jamie',
            team: [
                'quantum-dragons'
            ]
        },
        {
            id: 4,
            firstName: 'James',
            lastName: 'Ford',
            team: [
                'style-council'
            ]
        }
    ]
};

export default class World extends Component {
  constructor() {
    super();
    this.state = {rotation: 0};
  }
  componentDidMount() {
    var tick = () => {
      this.setState({rotation: this.state.rotation + Math.PI*SPEED});
      requestAnimationFrame(tick);
    };
    tick();
  }

  renderAtom(id, pos){
      return (<Atom id={id} rotation={this.state.rotation} x={pos} y={pos}/>);
  }

  render() {
    let pos = 100;
    let content = testJson.people.map((person, index) => this.renderAtom(person.id, 100*(index+1)));
    return (
        <Stage backgroundcolor={0xa08080} height={500} width={800} interactive={true}>
        {content}
        </Stage>
    );
  }
}
