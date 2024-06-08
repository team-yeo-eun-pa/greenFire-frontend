import {authRequest} from "./api";
import {success} from "../modules/AdminReportModules";

export const ReportAPICalls = ({reportRequest}) => {
    return async (dispatch, getState) => {
        const result = await authRequest.post(`/member/reports`, reportRequest)
        console.log('ReportAPICalls result : ', result);

        if(result.status === 200) {
            dispatch(success());
        }
    }
}