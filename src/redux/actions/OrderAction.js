import axios from "axios";

export const FETCH_ORDERS_REQUEST = "FETCH_ORDERS_REQUEST";
export const FETCH_ORDERS_SUCCESS = "FETCH_ORDERS_SUCCESS";
export const FETCH_ORDERS_FAILURE = "FETCH_ORDERS_FAILURE";


export const fetchOrderRequest = () => ({
    type: FETCH_ORDERS_REQUEST
});


export const fetchOrderSuccess = (orderData) => ({
    type: FETCH_ORDERS_SUCCESS,
    payload: orderData
});


export const fetchOrderFailure = (error) => ({
    type: FETCH_ORDERS_FAILURE,
    payload: error
});


export const OrderAction = (id) => {
    return async (dispatch) => {
        dispatch(fetchOrderRequest());
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_APP_URL}/api/orders/${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            const orderData = response.data.data;
            dispatch(fetchOrderSuccess(orderData));
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'An error occurred. Please try again.';
            dispatch(fetchOrderFailure(errorMessage));
        }
    }
}