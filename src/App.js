import React, { Component } from 'react';
import {connect} from 'react-redux';

import World from './world/World';
import Controls from './Controls';
import {loadModel} from  './model/actions'
import {createViewModel} from  './viewModel/actions'

import store from './store';

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

const mapStateToProps = (state) => {
    return {
        model: state.model
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoading: (model) => {
            dispatch(loadModel(model));
        },
        onLoaded: (model) => {
            dispatch(createViewModel(model));
        }
    };
};

class App extends Component {
    componentWillMount() {
        this.props.onLoading(testJson);
    }

    componentDidUpdate() {
        this.props.onLoaded(this.props.model.people);
    }

    render() {
        return (
            <div>
                <World/>
                <Controls/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);