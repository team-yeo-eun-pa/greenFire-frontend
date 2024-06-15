import { createActions, handleActions } from "redux-actions";

const initialState = {
    signupSuccess: false,
    memberCode: null,
    profileInfo: null,
};

// 액션 타입
const SUCCESS = 'members/SUCCESS';
const RESET = 'members/RESET';
const GET_PROFILE = 'members/GET_PROFILE';
const SET_MEMBER_CODE = 'members/SET_MEMBER_CODE';

// 액션 함수
export const { members: { success, reset, getProfile, setMemberCode } } = createActions({
    [SUCCESS]: () => ({ signupSuccess: true }),
    [RESET]: () => initialState,
    [GET_PROFILE]: (result) => ({ profileInfo: result.data }),
    [SET_MEMBER_CODE]: (memberCode) => ({ memberCode })
});

// 리듀서 함수
const memberReducer = handleActions({
    [SUCCESS]: (state, { payload }) => ({ ...state, ...payload }),
    [RESET]: () => initialState,
    [GET_PROFILE]: (state, { payload }) => ({ ...state, profileInfo: payload.profileInfo }),
    [SET_MEMBER_CODE]: (state, { payload }) => ({ ...state, memberCode: payload.memberCode }),
}, initialState);

export default memberReducer;
