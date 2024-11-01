import { getAPI, postAPI } from '../../common';
import { ACTIONS } from './constants';

export const getSales = () => async (dispatch) => {
    dispatch({ type: ACTIONS.GET_SALES, payload: {} });
    const respData = await getAPI("api/sales");
    if (respData?.success) {
        dispatch({ type: ACTIONS.GET_SALES_SUCCESS, payload: respData.data });
    } else {
        dispatch({ type: ACTIONS.GET_SALES_FAILED, payload: respData.message });
    }
};

export const createSales = (payload) => async (dispatch) => {
    dispatch({ type: ACTIONS.CREATE_SALES, payload: {} });
    const respData = await postAPI("api/sales", payload);
    if (respData?.success) {
        dispatch({ type: ACTIONS.CREATE_SALES_SUCCESS, payload: respData.data });
    } else {
        dispatch({ type: ACTIONS.CREATE_SALES_FAILED, payload: respData.message });
    }
};


