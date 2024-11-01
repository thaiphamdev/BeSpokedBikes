import { ACTIONS } from './constants';

const initialState = {
    isLoading: false,
    isError: false,
    respone: [],
    responeUpdate: {},
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.GET_PRODUCTS:
            return { ...state, isLoading: true };
        case ACTIONS.GET_PRODUCTS_SUCCESS:
            return { isLoading: false, isError: false, respone: action.payload };
        case ACTIONS.GET_PRODUCTS_FAILED:
            return { isLoading: false, isError: true, respone: action.payload };
        case ACTIONS.UPDATE_PRODUCTS:
            return { ...state, isLoading: true };
        case ACTIONS.UPDATE_PRODUCTS_SUCCESS:
            return { isLoading: false, isError: false, responeUpdate: action.payload };
        case ACTIONS.UPDATE_PRODUCTS_FAILED:
            return { isLoading: false, isError: true, responeUpdate: action.payload };
        default:
            return state;
    }
};

export default productReducer;