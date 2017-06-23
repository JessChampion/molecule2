import { combineReducers, createStore, Store } from 'redux';
import modelReducer from './model/reducers';
import viewModelReducer from './viewModel/reducers';

const rootReducer = combineReducers({
    model: modelReducer,
    viewModel: viewModelReducer
});
const store = createStore(rootReducer);

store.subscribe(() => {
    // Log the state whenever the store changes.
    console.log(store.getState());
});

export default store;
