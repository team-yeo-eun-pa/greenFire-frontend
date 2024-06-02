import { createAction, handleActions } from 'redux-actions';

// 초기 상태
const initialState = {
    adminCategory: [],
    success: false
};

// 액션 타입
const GET_ADMIN_CATEGORY = 'category/GET_ADMIN_CATEGORY';
const SUCCESS = 'category/SUCCESS';
const ADD_CATEGORY = 'category/ADD_CATEGORY'; // ADD_CATEGORY 액션 타입 추가


// 액션 생성자
export const getAdminCategory = createAction(GET_ADMIN_CATEGORY, (result) => ({ category: result.data }));
export const success = createAction(SUCCESS);

export const addCategory = createAction(ADD_CATEGORY, (category) => category);


// 리듀서
const AdminCategoryReducer = handleActions({
    [GET_ADMIN_CATEGORY]: (state, { payload }) => ({
        ...state,
        adminCategory: payload.category // 데이터 구조 확인 필요
    }),
    [SUCCESS]: (state) => ({
        ...state,
        success: true
    }),
    [ADD_CATEGORY]: (state, { payload }) => ({
        ...state,
        adminCategory: [...state.adminCategory, payload]
    })
}, initialState);



export default AdminCategoryReducer;
