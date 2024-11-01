import { ACTIONS } from './constants';

const initialState = {
    isLoading: false,
    isError: false,
    respone: [],
    responeUpdate: {},
};

const salesPersonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.GET_SALES_PERSONS:
            return { ...state, isLoading: true };
        case ACTIONS.GET_SALES_PERSONS_SUCCESS:
            return { isLoading: false, isError: false, respone: action.payload };
        case ACTIONS.GET_SALES_PERSONS_FAILED:
            return { isLoading: false, isError: true, respone: action.payload };
        case ACTIONS.UPDATE_SALES_PERSONS:
            return { ...state, isLoading: true };
        case ACTIONS.UPDATE_SALES_PERSONS_SUCCESS:
            return { isLoading: false, isError: false, responeUpdate: action.payload };
        case ACTIONS.UPDATE_SALES_PERSONS_FAILED:
            return { isLoading: false, isError: true, responeUpdate: action.payload };
        default:
            return state;
    }
};

export default salesPersonsReducer;