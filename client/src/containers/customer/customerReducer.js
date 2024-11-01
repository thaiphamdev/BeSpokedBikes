import { ACTIONS } from './constants';

const initialState = {
    isLoading: false,
    isError: false,
    respone: [],
};

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.GET_CUSTOMERS:
            return { ...state, isLoading: true };
        case ACTIONS.GET_CUSTOMERS_SUCCESS:
            return { isLoading: false, isError: false, respone: action.payload };
        case ACTIONS.GET_CUSTOMERS_FAILED:
            return { isLoading: false, isError: true, respone: action.payload };
        default:
            return state;
    }
};

export default customerReducer;