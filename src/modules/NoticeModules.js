// NoticeModules.js
import { createActions, handleActions } from 'redux-actions';
import axios from 'axios';

const initialState = {
    notices: [],
    success: false
};

// 액션 타입
const GET_NOTICES = 'notice/GET_NOTICES';
const SUCCESS = 'notice/SUCCESS';

// 액션 함수
export const { notice: { getNotices, success } } = createActions({
    [GET_NOTICES]: (result) => ({ notices: result.data }),
    [SUCCESS]: () => ({ success: true })
});


// 리듀서 함수
const noticeReducer = handleActions({
    [GET_NOTICES]: (state, { payload }) => payload,
    [SUCCESS]: (state, { payload }) => ({
        ...state,
        success: payload.success
    })
}, initialState);

export default noticeReducer;
