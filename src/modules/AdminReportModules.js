import { createActions, handleActions } from 'redux-actions';

const initialState = {
    adminReports: [],  // 초기 상태 설정
    success: false
};

// 액션 타입
const GET_ADMIN_REPORTS = 'reports/GET_ADMIN_REPORTS';
// const GET_ADMIN_REPORT = 'reports/GET_ADMIN_REPORT';
const SUCCESS = 'reports/SUCCESS';
const MODIFY_STATUS = 'reports/MODIFY_STATUS'

// 액션 함수
export const { reports: { getAdminReports, success } } = createActions({
    [GET_ADMIN_REPORTS]: (result) => ({ reports: result.data }),
    [MODIFY_STATUS] : (result) => ({reports: result.data}),
    [SUCCESS]: () => ({ success: true })
});

// 리듀서 함수
const AdminReportReducer = handleActions({
    [GET_ADMIN_REPORTS]: (state, { payload }) => ({
        ...state,
        reports: payload.reports.data
    }),
    [MODIFY_STATUS] : (state, {payload}) => ({
        ...state,
        reports: payload.reports.data
    }),
    [SUCCESS]: (state, { payload }) => ({
        ...state,
        success: payload.success
    })
}, initialState);

export default AdminReportReducer;
