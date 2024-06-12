import {authRequest, request} from "./api";
import {getCart} from "../modules/CartModules";

export const callCartAPI = () => {
    return async (dispatch, getState) => {
        try {
            const result = await authRequest.get(`/cart`);
            console.log('callCartAPI result: ', result);

            if (result.status === 200) {
                dispatch(getCart(result));
            }
        } catch (error) {
            console.error('callCartAPI call error: ', error)
        }
    }
};