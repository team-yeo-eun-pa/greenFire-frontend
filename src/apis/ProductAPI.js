import {useEffect} from "react";
import axios from "axios";
import {authRequest, request} from "./api";
import {getNotices} from "../modules/NoticeModules";
import async from "async";
import {getProduct, getProducts, registSuccess, success} from "../modules/ProductModules";
import {getAdminCategory} from "../modules/AdminCategoryModules";
import {getOptions} from "../modules/ProductOptionModules";
import {toast} from "react-toastify";

export const callProductListAPI = ({currentPage}) => {

    return async (dispatch, getState) => {
        const result = await request(
            'GET',
            `/product?page=${currentPage}`
        );
        console.log('callProductListAPI result: ', result);

        if (result && result.status === 200) {
            dispatch(getProducts(result));
        }
    }
};

export const callProductDetailAPI = ({productCode}) => {
    return async (dispatch, getState) => {
        const result = await request(
            'GET',
            `/product/${productCode}`
        );
        console.log('callProductDetailAPI result: ', result);

        if (result.status === 200) {
            dispatch(getProduct(result));
        }
    }
};



export const callSellerProductListAPI = ({currentPage = 1}) => {

    return async (dispatch, getState) => {
        const result = await authRequest.get(`/seller/mystore/product?page=${currentPage}`
        );
        console.log('callSellerProductListAPI result : ',result);
        if (result && result.status === 200) {
            dispatch(getProducts(result));
            dispatch(success());
        }
    }
};

export const callSellerProductDetailAPI = ({productCode}) => {

    return async (dispatch, getState) => {
        const result = await authRequest.get(`/seller/mystore/product/${productCode}`
        );
        console.log('callSellerProductListAPI result : ',result);
        if (result && result.status === 200) {
            dispatch(getProduct(result));
            dispatch(success());
        }
    }
};


export const callSellerProductRegistAPI = ({ registRequest }) => {
    return async (dispatch, getState) => {
        try {
            const result = await authRequest.post(`/seller/mystore/regist`, registRequest);
            if (result.status === 201) {
                dispatch(success());
                toast.success("상품 등록을 완료했습니다.");
            } else {
                console.error('오류:', result.status);
                toast.warning("모든 항목을 입력해주세요.");
            }
        } catch (error) {
            console.error('상품 등록 오류:', error);
            toast.warning("상품 등록에 실패했습니다. 다시 시도해주세요.");
        }
    }
};



export const callSellerProductModifyAPI = ({ productCode, modifyRequest }) => {
    return async (dispatch, getState) => {
        try {
            const result = await authRequest.put(`/seller/mystore/edit/${productCode}`, modifyRequest);
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

export const callSellerProductDeleteAPI = ({productCode, sellablestatus}) => {

    return async (dispatch, getState) => {

        const result = await authRequest.put(`seller/mystore/product/${productCode}`, {sellablestatus});
        console.log('callSellerProductDeleteAPI result : ', result);

        if (result.status === 201) {
            dispatch(success());
            toast.success("상품 삭제를 완료했습니다.");
        }
    }
};

export const callProductOptionListAPI = ({productCode}) => {

    return async (dispatch, getState) => {
        const result = await request(
            'GET',
            `/product/${productCode}`
        );
        console.log('callProductOptionListAPI result : ',result);
        if (result && result.status === 200) {
            dispatch(getOptions(result));
        }
    }
};

/* 옵션 관리 */

export const callSellerOptionRegistAPI = ({ productCode, registRequest }) => {
    return async (dispatch, getState) => {
        try {
            const result = await authRequest.post(`/seller/mystore/editOption/${productCode}`, registRequest);
            if (result.status === 201) {
                dispatch(success());
                toast.success("옵션 추가를 완료했습니다.");
            } else {
                console.error('오류:', result.status);
                toast.warning("옵션 추가에 실패했습니다. 다시 시도해주세요.");
            }
        } catch (error) {
            console.error('상품 등록 오류:', error);
            toast.warning("옵션 추가에 실패했습니다. 다시 시도해주세요.");
        }
    }
};



export const callSellerOptionModifyAPI = ({ optionCode, modifyRequest }) => {
    return async (dispatch, getState) => {
        try {
            const result = await authRequest.put(`/seller/mystore/editOption/${optionCode}`, modifyRequest);
            if (result.status === 201) {
                dispatch(success());
                toast.success("옵션 수정을 완료했습니다.");
            } else {
                console.error('오류:', result.status);
                toast.warning("옵션 수정에 실패했습니다. 다시 시도해주세요.");
            }
        } catch (error) {
            console.error('상품 수정 오류:', error);
            toast.warning("옵션 수정에 실패했습니다. 다시 시도해주세요.");
        }
    }
};

export const callSellerOptionDeleteAPI = ({ optionCode, optionAppearActivate }) => {

    return async (dispatch, getState) => {

        const result = await authRequest.put(`/seller/mystore/editOption/${optionCode}/delete`, {optionAppearActivate});
        console.log('callSellerOptionDeleteAPI result : ', result);

        if (result.status === 201) {
            dispatch(success());
            toast.success("옵션 삭제를 완료했습니다.");
        }
    }
};



