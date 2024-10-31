export const getProducts = () => async (dispatch) => {
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }
    const response = await fetch('http://localhost:8080/api/products', options);
    const data = await response.json();
    dispatch({ type: 'GET_PRODUCTS', payload: data });
};