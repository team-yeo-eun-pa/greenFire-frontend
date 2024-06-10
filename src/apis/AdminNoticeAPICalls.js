
import {authRequest, request} from "./api";
import {getNotice, getNotices} from "../modules/NoticeModules";


export const AdminNoticesAPICalls = ({currentPage = 1}) => {
    return async (dispatch, getState) => {
        const result = await authRequest.get( `/admin/notices?page=${currentPage}`);
        console.log('AdminNoticesAPICalls result : ', result);

        if(result.status === 200) {
            dispatch(getNotices(result));
        }
    }
}

export const AdminNoticeAPICalls = ({noticeCode}) => {
    return async (dispatch, getState) => {
        console.log("noticeCode api : ", noticeCode)
        const result = await request('GET' , `/admin/notices/${noticeCode}`);
        console.log('AdminNoticeAPICalls result : ', result);

        if(result.status === 200) {
            dispatch(getNotice(result));
        }
    }
}

export const AdminNoticeCreateAPICalls = ({ noticeCreateRequest }) => {
    return async (dispatch, getState) => {
        console.log("noticeCreateRequest api: ", noticeCreateRequest);

        const result = await authRequest.post(`/admin/notice-create`, noticeCreateRequest, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        if (result.status === 200) {
            dispatch(getNotice(result));
        }
    }
}



