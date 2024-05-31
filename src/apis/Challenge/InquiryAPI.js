import async from "async";
import {request} from "../api";

export const callInquiryListAPI = ({currentPage = 1}) => {
    return async (dispatch, getState) => {
        const result = await request(`GET`, `/member/inquiry?page=${currentPage}`);

        if(result.status === 200) {
            dispatch(getInquiry(result));
        }

    } //왜엄떠
}