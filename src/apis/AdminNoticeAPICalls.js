
import {authRequest, request} from "./api";
import {getNotices} from "../modules/NoticeModules";

export const AdminNoticeAPICalls = ({currentPage = 1}) => {
    return async (dispatch, getState) => {
        const result = await authRequest.get(`/admin/notices?page=${currentPage}`);
        console.log('AdminNoticeAPICalls result : ', result);

        if(result.status === 200) {
            dispatch(getNotices(result));
        }
    }
}

