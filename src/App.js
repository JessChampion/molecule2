import React, { Component } from 'react';

import World from './world/World';
import Controls from './Controls';

export class App extends Component {
  render() {
    return (
        <div>
            <World/>
            <Controls/>
        </div>
    );
  }
}
