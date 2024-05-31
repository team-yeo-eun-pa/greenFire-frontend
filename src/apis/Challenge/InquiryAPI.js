import async from "async";
import {request} from "../api";
import {success} from "../../modules/MemberModules";
import {toast} from "react-toastify";
import {getInquiry} from "../../modules/InquiryModules";

export const callInquiryListAPI = ({currentPage = 1}) => {
    return async (dispatch, getState) => {
        const result = await request(`GET`, `/member/inquiry?page=${currentPage}`);

        if(result.status === 200) {
            dispatch(getInquiry(result));
        } else {
            toast.warning("문의 목록 조회에 실패했습니다. ")
        }

    }
}
