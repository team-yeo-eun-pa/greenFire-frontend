import {createActions, handleActions} from "redux-actions";


const initialState = {};

const GET_PRODUCTS = 'product/GET_PRODUCTS';
const GET_PRODUCT = 'product/GET_PRODUCT';
const SUCCESS = 'product/SUCCESS';

export const { product : { getProducts, getProduct, success }} = createActions({
    [GET_PRODUCTS] : result => ({products : result.data }),
    [GET_PRODUCT] : result => ({product : result.data }),
    [SUCCESS] : () => ({ success : true })
})

const productReducer = handleActions({
    [GET_PRODUCTS] : (state, {payload}) => payload,
    [GET_PRODUCT] : (state, {payload}) => payload,
    [SUCCESS] : (state, {payload}) => payload
}, initialState);

export default productReducer;