import { getAPI } from '../../common';
import { ACTIONS } from './constants';

export const getReport = () => async (dispatch) => {
    dispatch({ type: ACTIONS.GET_REPORT, payload: {} });
    const respData = await getAPI("api/sales/report");
    if (respData?.success) {
        dispatch({ type: ACTIONS.GET_REPORT_SUCCESS, payload: respData.data });
    } else {
        dispatch({ type: ACTIONS.GET_REPORT_FAILED, payload: respData.message });
    }
};
