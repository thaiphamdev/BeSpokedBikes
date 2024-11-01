import { getAPI } from '../../common';
import { ACTIONS } from './constants';

export const getCustomers = () => async (dispatch) => {
    dispatch({ type: ACTIONS.GET_CUSTOMERS, payload: {} });
    const respData = await getAPI("api/customers");
    if (respData?.success) {
        dispatch({ type: ACTIONS.GET_CUSTOMERS_SUCCESS, payload: respData.data });
    } else {
        dispatch({ type: ACTIONS.GET_CUSTOMERS_FAILED, payload: respData.message });
    }
};
