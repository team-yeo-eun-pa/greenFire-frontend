import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {callOrderDetailAPI, callOrdersAPI} from '../../apis/OrderAPICalls';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import Order from "../../components/items/Order";

const MemberOrderDetails = () => {
    const { orderCode } = useParams();
    const dispatch = useDispatch();

    const orders = useSelector(state => state.orderReducer.orders) || [];

    const order = orders.data.find(order => order.orderCode === parseInt(orderCode));

    // 주문 상태 수정 함수 추가
    const handleButtonClick = (orderCode, storeOrderCode, buttonName) => {
        let status = "주문 접수"; // 기본 상태

        // 버튼 이름에 따라 상태 결정
        if (buttonName === "거절") {
            status = "주문 거절";
        } else if (buttonName === "승인") {
            status = "상품 준비";
        }
    }

    return (
        <>
            {
                order ?
                    <Container>
                        <div className="mt-4 fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">주문∙배송 > 주문 상세</div>

                        <h3 className="mt-4 mb-4 shipping-info-title">{order.orderDate} 주문 | (주문번호 {order.orderCode})</h3>

                        <h3 className="mt-4 shipping-info-title">배송지 정보</h3>
                        <Card className="mt-2 mb-4">
                            <Row>
                                <Col md={2} className="m-4 text-md-right text-sm-left">
                                    <p><strong>받는 사람</strong></p>
                                    <p><strong>연락처</strong></p>
                                    <p><strong>주소</strong></p>
                                </Col>
                                <Col className="m-4">
                                    <p>{order.receiverName}</p>
                                    <p>{order.contactNumber}</p>
                                    <p>({order.addressZonecode}) {order.address} {order.addressDetail}</p>
                                </Col>
                            </Row>
                        </Card>

                        <h3 className="mt-4 shipping-info-title">주문 상품</h3>

                        <Order
                            orderCode={order.orderCode} // orderCode 전달
                            storeOrders={order.storeOrders}
                            topButtonNames={[""]}
                            bottomButtonNames={["문의"]}
                            buttonOrderStatus={""}
                            buttonOnClickEvent={handleButtonClick} // 함수 전달
                        />
                        <Row>
                            <Col md={6}>
                                <h3 className="mt-4 shipping-info-title">결제 정보</h3>
                                <Card className="mt-2 mb-4">
                                    <Row className="m-4">
                                        <Col md={5}>
                                            <p><strong>총 상품 금액</strong></p>
                                            <p><strong>배송비</strong></p>
                                            <p><strong>할인 금액</strong></p>
                                        </Col>
                                        <Col className="text-right">
                                            <p>{order.totalOrderAmount}원</p>
                                            <p>{order.totalDeliveryAmount}원</p>
                                            <p>{order.totalDiscountAmount}원</p>
                                        </Col>
                                        <Col md={12}>
                                            <hr className="my-4"/>
                                        </Col>
                                        <Col md={5}>
                                            <p><strong>주문 금액</strong></p>
                                            <p><strong>{order.paymentWay}</strong></p>
                                        </Col>
                                        <Col className="text-right">
                                            <p>{order.totalRealPayment}원</p>
                                            <p>{order.totalRealPayment}원</p>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col className="text-center d-flex justify-content-center align-items-center">
                                <Button variant="success" style={{width: '80%'}}>취소 신청</Button>
                            </Col>
                        </Row>

                    </Container> :
                    <>
                        <div>주문을 찾을 수 없습니다.</div>;
                    </>
            }

        </>
    );
};

export default MemberOrderDetails;