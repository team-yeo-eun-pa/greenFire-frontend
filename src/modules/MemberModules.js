// 초기값
import {createActions, handleActions} from "redux-actions";

const initialState = {
    
};

// 액션 타입
const SUCCESS = 'members/SUCCESS';
const RESET = 'members/RESET';
const GET_PROFILE = 'members/GET_PROFILE';
const SET_MEMBER_CODE = 'members/SET_MEMBER_CODE';

// 액션 함수
export const { members : { success, reset, getProfile, setMemberCode }} = createActions({
    [SUCCESS] : () => ({success : true}),
    [RESET] : () => {},
    [GET_PROFILE] : (result) => ({ profileInfo : result.data }),
    [SET_MEMBER_CODE]: (memberCode) => ({ memberCode })
})

// 리듀서 함수
const memberReducer = handleActions({
    [SUCCESS] : (state, {payload}) => payload,
    [RESET] : () => initialState,
    [GET_PROFILE] : (state, { payload }) => payload,
    [SET_MEMBER_CODE]: (state, { payload }) => ({ ...state, memberCode: payload })
}, initialState);

export default memberReducer;