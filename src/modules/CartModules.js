import {createActions, handleActions} from "redux-actions";

const initialState = {
    success: false,
    loading : false,
    error : null
};

const GET_CART = 'cart/GET_CART';
const SUCCESS = 'cart/SUCCESS';
const ADD_CART = 'cart/ADD_CART';
const DELETE_CART = 'cart/DELETE_CART';


export const { cart : { getCart, success, addCart, deleteCart }} = createActions({
    [GET_CART] : result => ({cart : result.data }),
    [SUCCESS] : () => ({ success : true }),
    [ADD_CART] : cart => cart,
    [DELETE_CART] : cart => cart
})


const cartReducer = handleActions({
    [GET_CART]: (state, { payload }) => ({
        ...state,
        cart: payload.cart
    }),
    [SUCCESS]: (state) => ({
        ...state,
        success: true
    }),
    [ADD_CART]: (state, { payload }) => ({
        ...state,
        cart: [...state.cart, payload]
    }),
    [DELETE_CART]: (state, { payload }) => ({
        ...state,
        cart: state.cart.filter(cart => cart !== payload)
    })
}, initialState);

export default cartReducer;