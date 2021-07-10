import axiosClient from '../../config/axios';
import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from '../types';

//* create

//* MIDDLEWARE
export function createProductAction(product) {
    return async (dispatch) => {
        dispatch(addProduct());
        try {
            const data = await axiosClient.post('/products', product);
            console.log(data);
            dispatch(addProductSuccess(product));
        } catch (error) {
            console.log(error);
            dispatch(addProductError(true));
        }
    };
}

// * ACTIONS
const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true,
});

const addProductSuccess = (product) => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product,
});

const addProductError = (state) => ({
    type: ADD_PRODUCT_ERROR,
    payload: state,
});
