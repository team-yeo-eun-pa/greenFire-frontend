import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import {CheckoutPage} from "../../pages/payment/CheckoutPage";
import {useNavigate} from "react-router-dom";

function OrderSummary({ totalAmount, deliveryFee }) {

    const navigate = useNavigate();

    return (
        <Card className="mb-4">
            <Card.Body>
                <h4 className="mb-4">결제 금액</h4>
                <div className="d-flex justify-content-between">
                    <p>총 상품 금액</p>
                    <p>{totalAmount.toLocaleString()}원</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p>배송비</p>
                    <p>{deliveryFee.toLocaleString()}원</p>
                </div>
                {/*<div className="d-flex justify-content-between">*/}
                {/*    <p>쿠폰 사용</p>*/}
                {/*    <p>0원</p>*/}
                {/*</div>*/}
                <hr/>
                <div className="d-flex justify-content-between mb-4">
                    <h5>최종 결제 금액</h5>
                    <h5 className="text-success">{(totalAmount+deliveryFee).toLocaleString()}원</h5>
                </div>
                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="아래 내용에 모두 동의합니다. (필수)"/>
                </Form.Group>
                <p className="text-muted mb-4">
                    본인은 만 14세 이상이며, 주문 내용을 확인하였습니다.
                </p>
                <p className="text-muted mb-4 small">
                    (주)초록불은 통신판매중개자로 거래 당사자가 아니므로, 판매자가 등록한 상품정보 및 거래 등에 대해 책임을 지지 않습니다. (단, (주)초록불이 판매자로 등록 판매한
                    상품은 판매자로서 책임을 부담합니다.)
                </p>
            </Card.Body>
        </Card>
    );
}
export default OrderSummary;