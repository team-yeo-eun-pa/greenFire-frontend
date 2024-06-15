import {authRequest, request} from "./api";
import {getCart} from "../modules/CartModules";
import {toast} from "react-toastify";
import {success} from "../modules/ProductModules";

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

export const callAddCartAPI = ({ cartItemRequest }) => {
    return async (dispatch, getState) => {
        try {
            const result = await authRequest.post(`/product`, cartItemRequest);
            if (result.status === 201) {
                dispatch(success());
                toast.success("상품이 장바구니에 추가되었습니다.");
            } else {
                console.error('오류:', result.status);
                toast.warning("상품을 장바구니에 담지 못했습니다.");
            }
        } catch (error) {
            console.error('장바구니 추가 오류:', error);
            toast.warning("상품을 장바구니에 담지 못했습니다.");
        }
    }
};



export const callEditCartAPI = ({ cartCode, cartItemRequest }) => {
    return async (dispatch, getState) => {
        try {
            const result = await authRequest.put(`/cart/${cartCode}`, cartItemRequest);
            if (result.status === 201) {
                dispatch(success());
                toast.success("상품 수정을 완료했습니다.");
            } else {
                console.error('오류:', result.status);
                toast.warning("상품 수정에 실패했습니다. 다시 시도해주세요.");
            }
        } catch (error) {
            console.error('상품 수정 오류:', error);
            toast.warning("상품 수정에 실패했습니다. 다시 시도해주세요.");
        }
    }
};

export const callRemoveCartAPI = ({cartCode}) => {

    return async (dispatch, getState) => {

        const result = await authRequest.delete(`/cart/${cartCode}`);
        console.log('callRemoveCartAPI result : ', result);

        if (result.status === 201) {
            dispatch(success());
            toast.success("상품 삭제를 완료했습니다.");
        }
    }
};