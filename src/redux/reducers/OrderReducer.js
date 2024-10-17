import { FETCH_ORDERS_FAILURE, FETCH_ORDERS_REQUEST, FETCH_ORDERS_SUCCESS } from "../actions/OrderAction";

const initialState = {
    loading: false, 
    order: null, 
    error: "",
};

const OrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ORDERS_REQUEST: 
            return {
                ...state, 
                loading: true,
            }
        
        case FETCH_ORDERS_SUCCESS:
            return {
                ...state, 
                loading: false, 
                order: action.payload
            }
        
        case FETCH_ORDERS_FAILURE: 
            return {
                ...state, 
                loading: false, 
                error: action.payload
            }

        default:
            return state;
    }
}

export default OrderReducer;