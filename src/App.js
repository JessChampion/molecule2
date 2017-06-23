import React, { Component } from 'react';
import {connect} from 'react-redux';

import World from './world/World';
import Controls from './Controls';
import {loadModel} from  './model/actions'

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

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => {
            dispatch(loadModel(testJson));
        }
    };
};

class App extends Component {
    componentWillMount() {
        this.props.onLoad();
    }


    render() {
        return (
            <div>
                <World/>
                <Controls/>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(App);