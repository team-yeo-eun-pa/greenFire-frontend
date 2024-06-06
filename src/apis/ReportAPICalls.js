import {authRequest} from "./api";
import {success} from "../modules/AdminReportModules";

export const ReportAPICalls = ({memberCode}) => {
    return async (dispatch, getState) => {
        const result = await authRequest.post(`/member/reports`, {memberCode})
        console.log('ReportAPICalls result : ', result);


        if(result.status === 200) {
            dispatch(success());
        }
    }
}