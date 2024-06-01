import { createActions, handleActions } from 'redux-actions';

const initialState = {
    adminMembers: [],  // 초기 상태 설정
    success: false
};

// 액션 타입
const GET_ADMIN_MEMBERS = 'members/GET_ADMIN_MEMBERS';
const SUCCESS = 'members/SUCCESS';

// 액션 함수
export const { members: { getAdminMembers, success } } = createActions({
    [GET_ADMIN_MEMBERS]: (result) => ({ members: result.data }),
    [SUCCESS]: () => ({ success: true })
});

// 리듀서 함수
const AdminMemberReducer = handleActions({
    [GET_ADMIN_MEMBERS]: (state, { payload }) => ({
        ...state,
        adminMembers: payload.members.data
    }),
    [SUCCESS]: (state, { payload }) => ({
        ...state,
        success: payload.success
    })
}, initialState);

export default AdminMemberReducer;
