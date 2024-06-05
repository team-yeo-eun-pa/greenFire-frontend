import { createActions, handleActions } from "redux-actions";

// 초기값
const initialState = {
};

// 액션 타입
const GET_STORE_LIST = 'seller/GET_STORE_LIST';
const GET_STORE = 'seller/GET_STORE';

// 액션 함수
export const { seller : {getStoreList, getStore} } = createActions({
    [GET_STORE_LIST]: (sellerInfo) => ({ sellerInfo }),
    [GET_STORE]: (storeInfo) => ({ storeInfo })
});

// 리듀서 함수
const sellerReducer = handleActions({
    [GET_STORE_LIST]: (state, { payload }) => ({
        ...state,
        sellerInfo: payload.sellerInfo
    }),
    [GET_STORE]: (state, { payload }) => ({
        ...state,
        storeInfo: payload.storeInfo
    })
}, initialState);

export default sellerReducer;
