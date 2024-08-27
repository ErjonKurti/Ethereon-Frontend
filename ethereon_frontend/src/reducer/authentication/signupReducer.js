import { signupTypes } from "../../types/authentication";
const initialState = {
    isLoading: false,
    isSignedup: false,
};

export const signupReducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case signupTypes.SIGNUP_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case signupTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSignedup: true,
            };
        case signupTypes.SIGNUP_FAIL:
            return {
                ...state,
                isLoading: false,
                isSignedup: false,
            };
        default:
            return state; // Return state directly instead of an object with state
    }
};
