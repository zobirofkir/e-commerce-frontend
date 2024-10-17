import { RESET_FAILURE, RESET_REQUEST, RESET_SUCCESS } from "../actions/ResetAction";

const initialState = {
    loading: false,
    user: null,
    error: "",
};

const ResetReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_REQUEST:
            return {
                ...state,
                loading: true
            }

        case RESET_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: "",
            }

        case RESET_FAILURE:
            return {
                ...state,
                user: null,
                error: action.payload
            }

        default: 
            return state;
    }
}

export default ResetReducer;