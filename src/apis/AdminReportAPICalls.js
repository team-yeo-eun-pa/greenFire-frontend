import {authRequest} from "./api";
import {getAdminReports, success, getAdminReportDetail} from "../modules/AdminReportModules";

export const AdminReportAPICalls = ({currentPage = 1}) => {
    return async (dispatch, getState) => {
        const result = await authRequest.get(`/admin/suspend/members?page=${currentPage}`);
        console.log('AdminReportAPICalls result : ', result);

        if (result.status === 200) {
            dispatch(getAdminReports(result));
        }

    }
}

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
