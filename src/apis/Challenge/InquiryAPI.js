import async from "async";
import {request} from "../api";
import {getInquiry} from "../../modules/InquiryModules";

export const callInquiryListAPI = ({currentPage = 1}) => {
    return async (dispatch, getState) => {
        const result = await request(`GET`, `/member/inquiry?page=${currentPage}`);

        if(result?.status === 200) {
            dispatch(getInquiry(result));
        }

    }
}