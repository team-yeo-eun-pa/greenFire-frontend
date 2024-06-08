import {authRequest} from "./api";
import {getAdminReports, success, getAdminReportDetail} from "../modules/AdminReportModules";

export const AdminReportAPICalls = ({ currentPage = 1, role }) => {
    return async (dispatch, getState) => {
        const result = await authRequest.get(`/admin/suspend/members/by-role?role=${role}&page=${currentPage}`); // 엔드포인트 및 쿼리 파라미터 수정
        console.log('AdminReportAPICalls result : ', result);

        if (result.status === 200) {
            dispatch(getAdminReports(result));
        }
    };
};

export const AdminReportDetailAPICalls = ({ memberId }) => {
    return async (dispatch, getState) => {
        const result = await authRequest.get(`/admin/suspend/${memberId}`);
        console.log(`AdminReportDetailAPICalls result : ` , result);

        if (result.status === 200) {
            dispatch(getAdminReportDetail(result.data));
        }
    }
}



export const AdminReportSuspendEndAPICalls = ({memberCode}) => {
    return async (dispatch, getState) => {
        const result = await authRequest.post(`/admin/${memberCode}/suspendEnd`)

        if(result.status === 200) {
            dispatch(success());
        }
    }
}
