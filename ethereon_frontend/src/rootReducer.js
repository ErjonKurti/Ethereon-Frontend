import { combineReducers } from 'redux';

// Define a dummy reducer for demonstration
const dummyReducer = (state = {}, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    dummy: dummyReducer
});

export default rootReducer;
