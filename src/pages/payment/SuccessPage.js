import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {authRequest} from "../../apis/api";

export function SuccessPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        // 쿼리 파라미터 값이 결제 요청할 때 보낸 데이터와 동일한지 반드시 확인하세요.
        // 클라이언트에서 결제 금액을 조작하는 행위를 방지할 수 있습니다.
        const requestData = {
            orderId: searchParams.get("orderId"),
            amount: searchParams.get("amount"),
            paymentKey: searchParams.get("paymentKey"),
        };

        async function confirm() {
            const response = await authRequest.post("/toss/confirm", requestData);

            const json = await response.data;

            console.log("response.data json : ", json);

            // 응답 데이터 저장
            const paymentResponse = {

                orderId: json.orderId,

                paymentKey: json.paymentKey,
                method: json.method,

                balanceAmount: json.balanceAmount,
                requestedAt: json.requestedAt,
                approvedAt: json.approvedAt,
                lastTransactionKey: json.lastTransactionKey,
                status: json.status,

            };

            try {
                const response = await authRequest.post(`/payments/${json.orderId}`, paymentResponse);

                console.log('Payment successful:', response.data);
            } catch (error) {
                console.error('Payment failed', error);
            }



            // if (!response.ok) {
            //     // 결제 실패 비즈니스 로직을 구현하세요.
            //     navigate(`/fail?message=${json.message}&code=${json.code}`);
            //     return;
            // }

            // 결제 성공 비즈니스 로직을 구현하세요.
        }
        confirm();
    }, []);

    return (
        <div className="result wrapper">
            <div className="box_section">
                <h2>
                    결제 성공
                </h2>
                <p>{`주문번호: ${searchParams.get("orderId")}`}</p>
                <p>{`결제 금액: ${Number(
                    searchParams.get("amount")
                ).toLocaleString()}원`}</p>
                <p>{`paymentKey: ${searchParams.get("paymentKey")}`}</p>
            </div>
        </div>
    );
}

