import {LOAD_MODEL} from './actions';

const parseJSON = (jsonModel) => {
    console.log('load model from JSON');
    return jsonModel.people;
};

export default function modelReducer(state = {people: []}, action) {
    switch (action.type) {
        case LOAD_MODEL: {
            return {people: action.model.people};
        }
    }
    return state;
}
