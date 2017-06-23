import { combineReducers, createStore, Store } from 'redux';
import modelReducer from './model/reducers';

const rootReducer = combineReducers({
    model: modelReducer
});
const store = createStore(rootReducer);

store.subscribe(() => {
    // Log the state whenever the store changes.
    console.log(store.getState());
});

export default store;
