import {useEffect} from "react";
import axios from "axios";
import {request} from "./api";
import {getNotices} from "../modules/NoticeModules";
import async from "async";
import {getProducts} from "../modules/ProductModules";

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