import {useEffect} from "react";
import axios from "axios";
import {authRequest, request} from "./api";
import {getNotices} from "../modules/NoticeModules";
import async from "async";
import {getProducts, registSuccess, success} from "../modules/ProductModules";
import {getAdminCategory} from "../modules/AdminCategoryModules";
import {getOptions} from "../modules/ProductOptionModules";

export const callProductListAPI = ({currentPage = 1}) => {

    return async (dispatch, getState) => {
        const result = await request(
            'GET',
            `/product?page=${currentPage}`
            );
        console.log('callProductListAPI result : ',result);
        if (result && result.status === 200) {
            dispatch(getProducts(result));
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
        const result = await request(
            'GET',
            `/seller/mystore/product?page=${currentPage}`
        );
        console.log('callSellerProductListAPI result : ',result);
        if (result && result.status === 200) {
            dispatch(getProducts(result));
        }
    }
};

export const callSellerProductRegistAPI = ({ formData  }) => {
    return async (dispatch, getState) => {
        try {
            const result = await authRequest.post(`/seller/mystore/regist`, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
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


