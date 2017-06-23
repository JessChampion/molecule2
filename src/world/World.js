import React, { Component } from 'react';
import {connect} from 'react-redux';
import pixi from 'pixi.js';
import {Stage, Sprite, VectorText} from 'react-pixi';

import Atom from './Atom';

const SPEED = 0.005;

const mapStateToProps = (state) => {
    console.log('here2');
    console.log(state);
    return state.model;
};

class World extends Component {
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
      return (<Atom key={id} rotation={this.state.rotation} x={pos} y={pos}/>);
  }

  render() {
    let pos = 100;

    let content = this.props.people ?
        this.props.people.map((person, index) => this.renderAtom(person.id, 100*(index+1))) : '';
    return (
        <Stage backgroundcolor={0xa08080} height={500} width={800} interactive={true}>
        {content}
        </Stage>
    );
  }
}

export default connect(mapStateToProps)(World);