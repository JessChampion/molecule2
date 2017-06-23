import React, { Component } from 'react';
import {connect} from 'react-redux';
import pixi from 'pixi.js';
import {Stage, Sprite, VectorText} from 'react-pixi';

import Atom from './Atom';

const SPEED = 0.005;

const mapStateToProps = (state) => {
    return state.viewModel;
};

class World extends Component {
  constructor() {
    super();
    this.state = {rotation: 0};
  }

  componentDidMount() {
      var tick = () => {//This is where we will bind the animation
      // this.setState({rotation: this.state.rotation + Math.PI*SPEED});
      requestAnimationFrame(tick);
    };
    tick();
  }

  renderAtom(id, sprite, pos){
      return (<Atom key={id} sprite={sprite} x={pos} y={pos}/>);
  }

  render() {
    let pos = 100;
    const atoms = this.props.atoms ? this.props.atoms : [];
    const content = atoms.map((person, index) => this.renderAtom(person.id, person.sprite, 100*(index+1)));
    return (
        <Stage backgroundcolor={0xa08080} height={500} width={800} interactive={true}>
        {content}
        </Stage>
    );
  }
}

export default connect(mapStateToProps)(World);