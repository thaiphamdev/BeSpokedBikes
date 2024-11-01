import { ACTIONS } from './constants';

const initialState = {
    isLoading: false,
    isError: false,
    respone: [],
};

const reportReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.GET_REPORT:
            return { ...state, isLoading: true };
        case ACTIONS.GET_REPORT_SUCCESS:
            return { isLoading: false, isError: false, respone: action.payload };
        case ACTIONS.GET_REPORT_FAILED:
            return { isLoading: false, isError: true, respone: action.payload };
        default:
            return state;
    }
};

export default reportReducer;