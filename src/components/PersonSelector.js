import * as React from 'react';
import {connect} from 'react-redux';

import PersonSelectorComponent from './PersonSelectorComponent';
import {createIndividualViewModel} from '../viewModel/actions';


const mapStateToProps = (state) => {
    return state.model;
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSelect: (model, person) => {
            dispatch(createIndividualViewModel(model, person));
        }
    };
};

class PersonSelector extends React.Component {
    render() {
        const people = this.props.people ? this.props.people : [];
        const selectAction = (person) => {
            this.props.onSelect(this.props.people, person);
        };
        return (<PersonSelectorComponent people={people} onSelect={selectAction}/>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonSelector);