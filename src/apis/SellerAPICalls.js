import { authRequest } from "./api";
import { getStoreList, getStore } from "../modules/SellerModules";

export const callStoreListAPI = () => {

    return async (dispatch) => {
        const result = await authRequest.get(`/seller/mystore`);
        console.log('callStoreListAPI result : ', result);

        if (result.status === 200) {
            dispatch(getStoreList(result.data));
        }
    }
}

export const callStoreAPI = (storeCode) => {

    return async (dispatch) => {
        const result = await authRequest.get(`/seller/mystore/${storeCode}`);
        console.log('callStoreAPI result : ', result);

        if (result.status === 200) {
            dispatch(getStore(result.data));
        }
    }
}
