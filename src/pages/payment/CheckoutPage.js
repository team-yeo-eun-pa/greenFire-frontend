import React, { useEffect, useRef, useState } from "react";
import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
import {useNavigate} from "react-router-dom";
import {authRequest} from "../../apis/api";

// 구매자의 고유 아이디를 불러와서 customerKey로 설정하세요.
// 이메일・전화번호와 같이 유추가 가능한 값은 안전하지 않습니다.
const widgetClientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";
const customerKey = "eXn2LJyp1hUFwJswlGNPQ";
// const paymentWidget = PaymentWidget(widgetClientKey, PaymentWidget.ANONYMOUS) // 비회원 결제

export function CheckoutPage() {
    const navigate = useNavigate();
    const [paymentWidget, setPaymentWidget] = useState(null);
    const paymentMethodsWidgetRef = useRef(null);
    const [orderName, setOrderName] = useState("짱구티셔츠 외 1");
    const [paymentAmount, setPaymentAmount] = useState(1_000);

    useEffect(() => {
        const fetchPaymentWidget = async () => {
            try {
                const loadedWidget = await loadPaymentWidget(widgetClientKey, customerKey);
                setPaymentWidget(loadedWidget);
            } catch (error) {
                console.error("Error fetching payment widget:", error);
            }
        };

        fetchPaymentWidget();
    }, []);

    useEffect(() => {
        if (paymentWidget == null) {
            return;
        }

        const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
            "#payment-widget",
            { value: paymentAmount },
            { variantKey: "DEFAULT" }
        );

        paymentWidget.renderAgreement(
            "#agreement",
            { variantKey: "AGREEMENT" }
        );

        paymentMethodsWidgetRef.current = paymentMethodsWidget;
    }, [paymentWidget, paymentAmount]);

    useEffect(() => {
        const paymentMethodsWidget = paymentMethodsWidgetRef.current;

        if (paymentMethodsWidget == null) {
            return;
        }

        paymentMethodsWidget.updateAmount(paymentAmount);
    }, [paymentAmount]);

    const handlePaymentRequest = async () => {
        // 결제를 요청하기 전에 orderId, amount를 서버에 저장하세요.
        // 결제 과정에서 악의적으로 결제 금액이 바뀌는 것을 확인하는 용도입니다.
        const orderId = nanoid();

        const handlePayment = async () => {
            const paymentCreateRequest = {
                orderId: orderId,
                paymentAmount: paymentAmount,
            };

            try {
                const response = await authRequest.post('/payments', paymentCreateRequest);

                console.log('Payment successful:', response.data);
            } catch (error) {
                console.error('Payment failed', error);
            }

            try {

                await paymentWidget?.requestPayment({
                    orderId: orderId,
                    orderName: orderName,
                    customerName: "김토스",
                    customerEmail: "customer123@gmail.com",
                    customerMobilePhone: "01012341234",
                    successUrl: `${window.location.origin}/payment/success`,
                    failUrl: `${window.location.origin}/payment/fail`,
                });

            } catch (error) {
                console.error("Error requesting payment:", error);
            }
        };

        await handlePayment();
    };

    return (
        <div>
            {/* 할인 쿠폰 */}
            <label htmlFor="coupon-box">
                <input
                    id="coupon-box"
                    type="checkbox"
                    onChange={(event) => {
                        setPaymentAmount(event.target.checked ? paymentAmount - 5_000 : paymentAmount + 5_000);
                    }}
                />
                <span>5,000원 쿠폰 적용</span>
            </label>
            {/* 결제 UI, 이용약관 UI 영역 */}
            <div id="payment-widget" />
            <div id="agreement" />
            {/* 결제하기 버튼 */}
            <button onClick={handlePaymentRequest}>결제하기</button>
        </div>
    );
}
