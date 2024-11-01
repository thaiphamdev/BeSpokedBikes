import { getAPI, putAPI } from '../../common';
import { ACTIONS } from './constants';

export const getSalesPersons = () => async (dispatch) => {
    dispatch({ type: ACTIONS.GET_SALES_PERSONS, payload: {} });
    const respData = await getAPI("api/salespersons");
    if (respData?.success) {
        dispatch({ type: ACTIONS.GET_SALES_PERSONS_SUCCESS, payload: respData.data });
    } else {
        dispatch({ type: ACTIONS.GET_SALES_PERSONS_FAILED, payload: respData.message });
    }

};

export const updateSalesPerson = (payload) => async (dispatch) => {
    dispatch({ type: ACTIONS.UPDATE_SALES_PERSONS, payload: {} });
    const respData = await putAPI("api/salespersons", payload);
    if (respData?.success) {
        dispatch({ type: ACTIONS.UPDATE_SALES_PERSONS_SUCCESS, payload: respData.data });
    } else {
        dispatch({ type: ACTIONS.UPDATE_SALES_PERSONS_FAILED, payload: respData.message });
    }

};