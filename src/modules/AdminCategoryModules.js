import { createAction, handleActions } from 'redux-actions';

// 초기 상태
const initialState = {
    adminCategory: [],
    success: false,
    loading : false,
    error : null
};

// 액션 타입
const GET_ADMIN_CATEGORY = 'category/GET_ADMIN_CATEGORY';
const SUCCESS = 'category/SUCCESS';
const ADD_CATEGORY = 'category/ADD_CATEGORY';
const DELETE_CATEGORY = 'category/DELETE_CATEGORY'


// 액션 생성자
export const getAdminCategory = createAction(GET_ADMIN_CATEGORY, (result) => ({ category: result.data }));
export const success = createAction(SUCCESS);

export const addCategory = createAction(ADD_CATEGORY, (category) => category);

export const deleteCategory =createAction(DELETE_CATEGORY, (category) => category)


// 리듀서
const AdminCategoryReducer = handleActions({
    [GET_ADMIN_CATEGORY]: (state, { payload }) => ({
        ...state,
        adminCategory: payload.category
    }),
    [SUCCESS]: (state) => ({
        ...state,
        success: true
    }),
    [ADD_CATEGORY]: (state, { payload }) => ({
        ...state,
        adminCategory: [...state.adminCategory, payload]
    }),
    [DELETE_CATEGORY]: (state, { payload }) => ({
        ...state,
        adminCategory: state.adminCategory.filter(category => category !== payload)
    })
}, initialState);



export default AdminCategoryReducer;
