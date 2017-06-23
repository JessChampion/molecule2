import React, { Component } from 'react';

import PersonSelector from './components/PersonSelector'

export default class Controls extends Component {
  render() {
    return (
        <div>
            <h4>Controls</h4>
            <PersonSelector/>
        </div>
    );
  }
}
