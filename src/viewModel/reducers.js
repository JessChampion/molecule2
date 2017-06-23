import {CREATE_VIEW_MODEL} from './actions';
import * as R from 'ramda';

const addPlainSprite = R.map(R.assoc('sprite', 'plain'));

export default function viewModelReducer(state = {atoms: []}, action) {
    switch (action.type) {
        case CREATE_VIEW_MODEL: {
            return {atoms: addPlainSprite(action.people)};
        }
    }
    return state;
};
