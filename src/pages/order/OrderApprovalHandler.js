import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { callModifyOrderStatusAPI, callStoreOrderByOrderStatusAPI } from "../../apis/OrderAPICalls";
import Order from "../../components/items/Order";
import { Card, Col, Container, Row } from "react-bootstrap";
import Summary from "../../components/items/Summary";

function OrderApprovalHandler() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const orders = useSelector(state => state.orderReducer.orders) || [];

    const { storeCode } = useParams();
    const orderStatus = ["주문 접수"];

    useEffect(() => {
        dispatch(callStoreOrderByOrderStatusAPI({ currentPage, storeCode: 8, orderStatus }));
    }, [currentPage, storeCode, dispatch]);

    const orderData = orders.data;

    console.log("orderData", orderData);

    // 주문 상태 수정 함수 추가
    const handleButtonClick = (orderCode, storeOrderCode, buttonName) => {
        let status = "주문 접수"; // 기본 상태

        // 버튼 이름에 따라 상태 결정
        if (buttonName === "거절") {
            status = "주문 거절";
        } else if (buttonName === "승인") {
            status = "상품 준비";
        }

        dispatch(callModifyOrderStatusAPI({ orderCode, storeOrderCode, status }))
            .then(response => {
                console.log("Order status modified:", response);
                dispatch(callStoreOrderByOrderStatusAPI({ currentPage, storeCode: 8, orderStatus }));
            })
            .catch(error => {
                console.error("Failed to modify order status:", error);
            });
    };

    // 주문 요약 정보를 위한 데이터 준비
    const summaryData = [
        {
            title: "신규주문(미확인)",
            count: orderData ? orderData.reduce((acc, order) => acc + (order.storeOrders ? order.storeOrders.filter(storeOrder => storeOrder.orderStatus === "주문 접수").length : 0), 0) : 0
        },
        {
            title: "신규주문(승인)",
            count: orderData ? orderData.reduce((acc, order) => acc + (order.storeOrders ? order.storeOrders.filter(storeOrder => storeOrder.orderStatus === "상품 준비").length : 0), 0) : 0
        }
    ];

    // 설명 텍스트 준비
    const description = [
        "✔ 승인된 신규주문건은 배송 관리에서 발송처리를 하실 수 있습니다.",
        "발송처리: 택배 등 배송수단을 이용하여 구매상품을 고객에게 보내는 절차를 의미합니다."
    ];

    return (
        orders && (
            <Container>
                <div className="mt-4 fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">신규 주문 내역</div>

                <Summary summaryData={summaryData} description={description} />

                {orderData && orderData
                    .map((order, index) => (
                        <div key={order.orderCode} className="mb-4 mt-5">
                            <Card.Body>
                                <Row className="align-items-center">
                                    <Col>
                                        <div className="order-date-title">
                                            <Col>
                                                {order.orderDate} 주문 (주문번호 : {order.orderCode}) | {order.orderName}
                                            </Col>
                                        </div>
                                    </Col>
                                </Row>
                                <Order
                                    orderCode={order.orderCode} // orderCode 전달
                                    storeOrders={order.storeOrders}
                                    topButtonNames={["승인", "거절"]}
                                    bottomButtonNames={[""]}
                                    buttonOrderStatus={"주문 접수"}
                                    buttonOnClickEvent={handleButtonClick} // 함수 전달
                                />
                            </Card.Body>
                        </div>
                    ))}
            </Container>
        )
    );
}

export default OrderApprovalHandler;