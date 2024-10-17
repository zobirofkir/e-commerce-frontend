import axios from "axios";

export const RESET_REQUEST = "RESET_REQUEST";
export const RESET_SUCCESS = "RESET_SUCCESS";
export const RESET_FAILURE = "RESET_FAILURE";


export const resetRequest = () => ({
    type: RESET_REQUEST
});

export const resetSuccess = (userData) => ({
    type: RESET_SUCCESS,
    payload: userData
});

export const resetFailure = (error) => ({
    type: RESET_FAILURE,
    payload: error
});


export const ResetAction = (email) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_APP_URL}/api/users/password/email`, {
                email
            });

            const data = response.data.data;
            if (response.status === 200) {
                window.location.href = '/login';
            }

            dispatch(resetSuccess(data));
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'An error occurred. Please try again.';
            dispatch(resetFailure(errorMessage));
        }
    }
}