import {authRequest} from "./api";
import {toast} from "react-toastify";
import {getOrderDetails, getOrders, success} from "../modules/OrderModules";
import {getMemberId} from "../utils/TokenUtils";

// 주문 등록
export const callOrderRegistAPI = ({orderRequest}) => {
    return async (dispatch, getState) => {
        const result = await authRequest.post(
            `/orders`,
            orderRequest
        ).catch(e => {
            if(e.response.status === 409) {
                toast.error('재고 부족으로 상품 구매가 불가합니다.');
            }
        });

        console.log('callOrderRegistAPI result : ', result);

        if(result?.status === 201) {
            dispatch(success());
            return result.data;
        }

    }
}

// 주문 상태 수정 - 주문 승인, 거절
export const callModifyOrderStatusAPI = ({ orderCode, storeOrderCode, status, rejectionReason }) => {
    return async (dispatch, getState) => {
        const result = await authRequest.put(
            `/orders/${orderCode}/modify`,
            JSON.stringify({ orderCode, storeOrderCode, orderStatus:status, rejectionReason }),  // 수정할 상태와 storeOrderCode를 JSON으로 전달
            { headers: { 'Content-Type': 'application/json' } }
        ).catch(e => {
            if (e.response && e.response.status === 409) {
                toast.error('상태 변경에 문제가 발생했습니다.');
            }
        });

        console.log('callModifyOrderStatusAPI result : ', result);

        if (result?.status === 201) {
            dispatch(success());
        }
    }
}

// // 주문 상태 수정 - 주문 승인, 거절
// export const callModifyOrderStatusAPI = ({ orderCode, storeOrderCode, status }) => {
//     return async (dispatch, getState) => {
//         const result = await authRequest.put(
//             `/orders/${orderCode}/modify`,
//             JSON.stringify({ orderCode, storeOrderCode, orderStatus:status }),  // 수정할 상태와 storeOrderCode를 JSON으로 전달
//             { headers: { 'Content-Type': 'application/json' } }
//         ).catch(e => {
//             if (e.response && e.response.status === 409) {
//                 toast.error('상태 변경에 문제가 발생했습니다.');
//             }
//         });
//
//         console.log('callModifyOrderStatusAPI result : ', result);
//
//         if (result?.status === 201) {
//             dispatch(success());
//         }
//     }
// }

// 주문 상태 수정 - 배송처리
export const callModifyOrderStatusAndDeliveryRegistAPI = ({ orderCode, storeOrderCode, deliveryCompany, transportNumber, deliveryType }) => {
    return async (dispatch, getState) => {
        const result = await authRequest.put(
            `/orders/${orderCode}/modify/delivery`,
            JSON.stringify({ storeOrderCode, deliveryCompany, transportNumber, deliveryType:"일반 배송" }),  // 수정할 상태 JSON으로 전달
            { headers: { 'Content-Type': 'application/json' } }
        ).catch(e => {
            if (e.response && e.response.status === 409) {
                toast.error('상태 변경에 문제가 발생했습니다.');
            }
        });

        console.log('callModifyOrderStatusAndDeliveryRegistAPI result : ', result);

        if (result?.status === 201) {
            dispatch(success());  // 성공 시 필요에 따라 상태를 업데이트합니다.
        }
    }
}

// memberCode 기준 조회
export const callOrdersAPI = ({currentPage}) => {

    return async (dispatch, getState) => {
        const result = await authRequest.get(
            `/members/orders?page=${currentPage}`
        );

        console.log('배열인가요? : ',Array.isArray(result));
        console.log('callOrdersAPI result : ', result);

        if (result?.status === 200) {
            dispatch(getOrders(result));
        }
    }
}

// orderCode 기준 조회

// export const callOrderAPI = ({orderCode}) => {
//
//     return async (dispatch, getState) => {
//         const result = await authRequest.get(
//             `/orders/${orderCode}`
//         );
//
//         console.log('배열인가요? : ',Array.isArray(result));
//         console.log('callOrdersAPI result : ', result);
//
//         if (result?.status === 200) {
//             dispatch(getOrders(result));
//         }
//     }
// }

// storeCode 기준 조회

export const callStoreOrdersAPI = ({currentPage, storeCode}) => {
    return async (dispatch, getState) => {
        try {
            const result = await authRequest.get(
                // `/store/${storeCode}/orders?page=${currentPage}&storeCode=${storeCode}`
                `/stores/${storeCode}/orders?page=${currentPage}`
            );

            console.log('배열인가요? : ', Array.isArray(result));
            console.log('callOrdersAPI result : ', result);

            if (result?.status === 200) {
                dispatch(getOrders(result)); // result.data로 접근
            }
        } catch (e) {
            toast.error('판매자 주문 조회에 실패했습니다. 다시 시도해주세요.');
        }
    }
}

// storeCode & orderStatus 기준 조회

export const callStoreOrderByOrderStatusAPI = ({currentPage, storeCode, orderStatus}) => {
    return async (dispatch, getState) => {
        try {
            const result = await authRequest.get(
                `/stores/${storeCode}/orders?page=${currentPage}&orderStatus=${orderStatus.join(',')}`
            );

            console.log('배열인가요? : ', Array.isArray(result));
            console.log('callOrdersAPI result : ', result);

            if (result?.status === 200) {
                dispatch(getOrders(result)); // result.data로 접근
            }
        } catch (e) {
            toast.error('판매자 주문 조회에 실패했습니다. 다시 시도해주세요.');
        }
    }
}

