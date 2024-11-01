import { getAPI, putAPI } from '../../common';
import { ACTIONS } from './constants';

export const getProducts = () => async (dispatch) => {
    dispatch({ type: ACTIONS.GET_PRODUCTS, payload: {} });
    const respData = await getAPI("api/products");
    if (respData?.success) {
        dispatch({ type: ACTIONS.GET_PRODUCTS_SUCCESS, payload: respData.data });
    } else {
        dispatch({ type: ACTIONS.GET_PRODUCTS_FAILED, payload: respData.message });
    }
};

export const updateProduct = (payload) => async (dispatch) => {
    dispatch({ type: ACTIONS.UPDATE_PRODUCTS, payload: {} });
    const respData = await putAPI("api/products", payload);
    if (respData?.success) {
        dispatch({ type: ACTIONS.UPDATE_PRODUCTS_SUCCESS, payload: respData.data });
    } else {
        dispatch({ type: ACTIONS.UPDATE_PRODUCTS_FAILED, payload: respData.message });
    }

};