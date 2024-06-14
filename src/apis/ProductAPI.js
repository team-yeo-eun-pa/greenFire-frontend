import {useEffect} from "react";
import axios from "axios";
import {authRequest, request} from "./api";
import {getNotices} from "../modules/NoticeModules";
import async from "async";
import {getProduct, getProducts, registSuccess, success} from "../modules/ProductModules";
import {getAdminCategory} from "../modules/AdminCategoryModules";
import {getOptions} from "../modules/ProductOptionModules";

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
            } else {
                console.error('오류:', result.status);
            }
        } catch (error) {
            console.error('상품 등록 오류:', error);
        }
    }
};



export const callSellerProductModifyAPI = ({ productCode, modifyRequest }) => {
    return async (dispatch, getState) => {
        try {
            const result = await authRequest.put(`/seller/mystore/edit/${productCode}`, {modifyRequest});
            if (result.status === 201) {
                dispatch(success());
            } else {
                console.error('오류:', result.status);
            }
        } catch (error) {
            console.error('상품 수정 오류:', error);
        }
    }
};

export const callSellerProductDeleteAPI = ({productCode, sellablestatus}) => {

    return async (dispatch, getState) => {

        const result = await authRequest.put(`seller/mystore/product/${productCode}`, {sellablestatus});
        console.log('callSellerProductDeleteAPI result : ', result);

        if (result.status === 201) {
            dispatch(success());
        }
    }
};




