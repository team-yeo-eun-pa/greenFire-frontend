import { authRequest } from "./api";
import { toast } from 'react-toastify';
import {getAddress} from "../modules/AddressModules";
import {success} from "../modules/ApplyModules";
import {getMemberId} from "../utils/TokenUtils";

// 배송지 목록 조회
export const callGetDeliveryAddressesAPI = ({ currentPage = 1 }) => {
    return async (dispatch, getState) => {
        const result = await authRequest.get(`/members/${getMemberId()}/delivery-addresses`);
        console.log('callGetDeliveryAddressesAPI result : ', result);

        if (result.status === 200) {
            dispatch(getAddress(result));
        }
    }
}

// 배송지 등록
export function callDeliveryAddressRegistAPI({ deliveryAddressRequest }) {
    return async (dispatch, getState) => {
        const result = await authRequest.post(
            `/delivery-addresses`,
            deliveryAddressRequest
        ).catch(e => {
            if (e.response && e.response.status === 409) {
                toast.error('배송지 등록에 문제가 발생했습니다.');
            }
        });

        console.log('callDeliveryAddressRegistAPI result : ', result);

        if (result?.status === 201) {
            dispatch(success());
        }
    }
}