import {CREATE_DEFAULT_VM, CREATE_INDIVIDUAL_VM} from './actions';
import * as R from 'ramda';

const addPlainSprite = R.map(R.assoc('sprite', 'plain'));

const getTeamFromAtom = R.path(['person', 'team']);

const isInTeam = (team, atom) => {
    return R.compose(R.contains(team), getTeamFromAtom)(atom);
};

export default function viewModelReducer(state = {atoms: []}, action) {
    console.log('action: ');
    console.log(action);
    switch (action.type) {
        case CREATE_INDIVIDUAL_VM: {
            const targetID = parseInt(action.target);
            const targetTeam = R.compose(R.head, R.prop('team'), R.find(R.propEq('id', targetID)))(action.people);
            console.log(targetTeam);
            return {atoms: R.map((atom) => {
                if(atom.id === targetID){
                    return R.assoc('sprite', 'green')(atom);
                }
                if(R.contains(targetTeam)(atom.team)){
                    return R.assoc('sprite', 'blue')(atom);
                }
                return R.assoc('sprite', 'plain')(atom);
            })(action.people)};
        }
        case CREATE_DEFAULT_VM: {
            return {atoms: addPlainSprite(action.people)};
        }
    }
    return state;
};
