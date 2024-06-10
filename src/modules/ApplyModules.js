// 초기값
import {createActions, handleActions} from "redux-actions";

const initialState = {
    applyInfo: { data: [], pageInfo: {} },
    applyDetail: {}
};

// 액션 타입
const SUCCESS = 'members/SUCCESS';
const RESET = 'members/RESET';
const GET_APPLIES = 'members/GET_APPLIES';
const GET_APPLY_DETAIL = 'members/GET_APPLY_DETAIL';

// 액션 함수
export const { members : { success, reset, getApplies, getApplyDetail }} = createActions({
    [SUCCESS] : () => ({success : true}),
    [RESET] : () => {},
    [GET_APPLIES] : (result) => ({ applyInfo : result.data }),
    [GET_APPLY_DETAIL] : (result) => ({applyDetail: result })
})

// 리듀서 함수
const applyReducer = handleActions(
    {
        [SUCCESS]: (state, { payload }) => ({ ...state, success: payload.success }),
        [RESET]: () => initialState,
        [GET_APPLIES]: (state, { payload }) => ({
            ...state,
            applyInfo: payload.applyInfo
        }),
        [GET_APPLY_DETAIL]: (state, { payload }) => ({
            ...state,
            applyDetail: payload.applyDetail
        })
    },
    initialState
);

export default applyReducer;