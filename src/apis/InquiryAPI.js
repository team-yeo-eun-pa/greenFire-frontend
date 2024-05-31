
import {authRequest, request} from "./api";
import {toast} from "react-toastify";
import {getInquiry, success} from "../modules/InquiryModules";
import async from "async";

export const callInquiryListAPI = ({currentPage = 1}) => {
    return async (dispatch, getState) => {
        const result = await request(`GET`, `/member/inquiry?page=${currentPage}`);


        if(result?.status === 200) {
            dispatch(getInquiry(result));
        } else {
            toast.warning("문의 목록 조회에 실패했습니다. ")
        }

    }
}

export const callMemberInquiryRegistAPI = ({inquiryRegistRequest}) => {

    return async (dispatch, getState) => {
        const result = await authRequest.post(`/inquiry/regist`, inquiryRegistRequest);



        if(result.status === 200) {
            dispatch(success());
        } else {
            toast.warning("문의 등록에 실패했습니다.")
        }
    }

};