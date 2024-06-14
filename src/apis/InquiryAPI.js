
import {authRequest} from "./api";
import {toast} from "react-toastify";
import {getInquiry, success} from "../modules/InquiryModules";

export const callInquiryListAPI = ({currentPage}) => {
    return async (dispatch, getState) => {

         const result = await authRequest.get( `/inquiry/view?page=${currentPage}`);

        if(result?.status === 200) {
            dispatch(getInquiry(result));
        } else {
            toast.warning("문의 목록 조회에 실패했습니다. ")
        }

    }
}

export const callMemberInquiryRegistAPI = ({inquiryRegistRequest}) => {

    return async (dispatch, getState) => {
        const result = await authRequest.post(`/inquiry/members/regist`, inquiryRegistRequest);


        if (result?.status === 201) {
            dispatch(success());
            toast.warning("문의가 등록되었습니다. ")
        } else {
            toast.warning("문의 등록에 실패했습니다.")
        }
    }

}

export const callInquiryDetailViewAPI = ({inquiryCode}) => {

    return async (dispatch, getState) => {
        const result = await authRequest.get(`/inquiry/${inquiryCode}`);

        if (result?.status === 200) {

        } else {
            toast.warning("문의 상세내역을 불러오지 못했습니다")
        }
    }
}






