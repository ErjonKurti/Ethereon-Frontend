import { combineReducers } from 'redux';
import { signupReducer } from './authentication/signupReducer';
import { errorReducer } from './errorReducer/errorReducer';

const rootReducer = combineReducers({
    signupReducer,
    errorReducer,
})

export default rootReducer;