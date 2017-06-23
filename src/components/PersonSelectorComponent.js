import * as React from 'react';

export default class PersonSelectorComponent extends React.Component {

    handleChange(event) {
        const personID = event.target.value;
        this.props.onSelect(personID)
    }

    render() {
        const people = this.props.people ? this.props.people : [];
        let selected = null;
        return (
            <select onChange={(evt)=>this.handleChange(evt)}>
                <option key={0} value={null}>None selected</option>
                {people.map(function(person){
                    return <option key={person.id} value={person.id}>{person.firstName}</option>;
                })}
            </select>
        );
    }
}
