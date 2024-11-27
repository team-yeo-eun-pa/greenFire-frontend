import { useEffect } from "react";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {authRequest} from "../../apis/api";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export function SuccessPage() {
    const navigate = useNavigate();
    // const location = useLocation(); // useLocation 추가
    // const { orderData } = location.state; // 전달된 상태 데이터
    const [searchParams] = useSearchParams();
    // console.log("orderData",orderData)
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

    const handleMainClick = () => {
        navigate('/'); // 메인 페이지로 이동
    };

    const handleOrderClick = () => {
        navigate('/members/mypage/order-list'); // 주문 내역 페이지로 이동
    };

    return (
        <Container className="d-flex flex-column align-items-center justify-content-center">
            <img src="/greenFire_logo.png" alt="Green Fire Logo" className="my-5" style={{ width: '300px', marginBottom: '20px' }} />
            <h3 className="mb-3">주문이 성공적으로 완료되었습니다.</h3>
            <p className="mb-5 text-center text-secondary"></p>
                <Button variant="success" style={{ width: 300, marginBottom: 20 }} onClick={handleMainClick}>
                    메인으로
                </Button>
                <Button variant="outline-secondary" style={{ width: 300, marginBottom: 20 }} onClick={handleOrderClick}>
                    주문 내역보기
                </Button>
        </Container>
        // <div className="result wrapper">
        //
        //     {/*<div className="box_section">*/}
        //     {/*    <h2>*/}
        //     {/*        결제 성공*/}
        //     {/*    </h2>*/}
        //     {/*    <p>{`주문번호: ${searchParams.get("orderId")}`}</p>*/}
        //     {/*    <p>{`결제 금액: ${Number(*/}
        //     {/*        searchParams.get("amount")*/}
        //     {/*    ).toLocaleString()}원`}</p>*/}
        //     {/*    <p>{`paymentKey: ${searchParams.get("paymentKey")}`}</p>*/}
        //     {/*</div>*/}
        // </div>
    );
}
