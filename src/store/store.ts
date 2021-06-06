import { createStore } from 'redux';
import { rootReducer, RootState } from './reducers';

let initialState: RootState = {
    profile: null,
    jobs: null
};

export const store = createStore(rootReducer, initialState);