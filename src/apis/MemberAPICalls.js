import {request} from "./api";
import {toast} from "react-toastify";
import {saveToken} from "../utils/TokenUtils";
import {success} from "../modules/MemberModules";

export const callSignupAPI = ({signupRequest}) => {

    return async (dispatch, getState) => {
        const result = await request(
            'POST',
            '/members/signup',
            {'Content-Type': 'application/json'},
            JSON.stringify(signupRequest)
        );

        console.log('callSignupAPI result : ', result);

        if (result?.status === 201) {
            dispatch(success());
        } else {
            toast.warning("회원가입에 실패했습니다. 다시 시도해주세요.")
        }
    }
}