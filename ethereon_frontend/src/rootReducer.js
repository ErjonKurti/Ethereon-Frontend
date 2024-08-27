import { combineReducers } from 'redux';


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
