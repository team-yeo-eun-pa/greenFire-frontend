import {useEffect} from "react";
import axios from "axios";
import {authRequest, request} from "./api";
import {getNotices} from "../modules/NoticeModules";
import async from "async";
import {getProducts} from "../modules/ProductModules";
import {getAdminCategory, success} from "../modules/AdminCategoryModules";
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

export const callProductCategoryListAPI = () => {

    return async (dispatch, getState) => {
        const result = await request(
            'GET',
            `/category`
        );
        console.log('callProductCategoryListAPI result : ',result);
        if (result && result.status === 200) {
            dispatch(getAdminCategory(result));
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

export const callSellerProductRegistAPI = ({ registRequest }) => {
    return async (dispatch, getState) => {
        console.log(registRequest);
        const result = await authRequest.post(`/seller/mystore/regist`, registRequest);
        console.log('callSellerProductRegistAPI result : ',result);

        if(result.status === 201) {
            dispatch(success());
        }
    }
}
