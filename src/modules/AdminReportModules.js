import { createActions, handleActions } from 'redux-actions';

const initialState = {
    adminReports: [],
    reportDetails: [],
    success: false
};

// 액션 타입
const GET_ADMIN_REPORTS = 'reports/GET_ADMIN_REPORTS';
const SUCCESS = 'reports/SUCCESS';
const MODIFY_STATUS = 'reports/MODIFY_STATUS';
const GET_ADMIN_REPORT_DETAIL = 'reports/GET_ADMIN_REPORT_DETAIL';

// 액션 함수
export const { reports: { getAdminReports, getAdminReportDetail, success } } = createActions({
    [GET_ADMIN_REPORTS]: (result) => ({ reports : result.data }), // 수정
    [MODIFY_STATUS]: (result) => ({ reports: result.data || {} }), // 수정
    [GET_ADMIN_REPORT_DETAIL]: (result) => ({ reportDetails: result }),
    [SUCCESS]: () => ({ success: true })
});

// 리듀서 함수
const AdminReportReducer = handleActions({
    [GET_ADMIN_REPORTS]: (state, { payload }) => ({
        ...state,
        reports: payload.reports.data
    }),
    [MODIFY_STATUS]: (state, { payload }) => ({
        ...state,
        reports: payload.reports.data
    }),
    [SUCCESS]: (state, { payload }) => ({
        ...state,
        success: payload.success
    }),
    [GET_ADMIN_REPORT_DETAIL]: (state, { payload }) => ({
        ...state,
        reportDetails: payload.reportDetails
    }),
}, initialState);

export default AdminReportReducer;
