import { ACTIONS } from './constants';

const initialState = {
    isLoading: false,
    isError: false,
    respone: [],
    createRespone: [],
};

const salesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.GET_SALES:
            return { ...state, isLoading: true };
        case ACTIONS.GET_SALES_SUCCESS:
            return { isLoading: false, isError: false, respone: action.payload };
        case ACTIONS.GET_SALES_FAILED:
            return { isLoading: false, isError: true, respone: action.payload };
        case ACTIONS.CREATE_SALES:
            return { ...state, isLoading: true };
        case ACTIONS.CREATE_SALES_SUCCESS:
            return { isLoading: false, isError: false, createRespone: action.payload };
        case ACTIONS.CREATE_SALES_FAILED:
            return { isLoading: false, isError: true, createRespone: action.payload };
        default:
            return state;
    }
};

export default salesReducer;