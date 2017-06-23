import {CREATE_DEFAULT_VM, CREATE_INDIVIDUAL_VM} from './actions';
import * as R from 'ramda';

const addPlainSprite = R.map(R.assoc('sprite', 'plain'));

export default function viewModelReducer(state = {atoms: []}, action) {
    console.log('action: ');
    console.log(action);
    switch (action.type) {
        case CREATE_INDIVIDUAL_VM: {
            return {atoms: R.map((atom) => {
                if(atom.id === parseInt(action.target)){
                    return R.assoc('sprite', 'green')(atom);
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
