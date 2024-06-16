import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import {callOrdersAPI} from "../../apis/OrderAPICalls";
import Order from "../../components/items/Order";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import StatusTracker from "../../components/items/StatusTracker";

function MemberOrderList() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentPage,setCurrentPage] = useState(1);
    const [sortedOrders, setSortedOrders] = useState([]); // 정렬된 주문을 저장할 상태 추가
    const orders = useSelector(state => state.orderReducer.orders) || [];

    // 필터링된 주문 데이터
    const filteredOrderData = sortedOrders.filter(order => !order.isOrderCancel);
    const filteredCancelOrderData = sortedOrders.filter(order => order.isOrderCancel);

    const onClickOrderDetailsHandler = (order) => {
        console.log(order);
        navigate(`${order.orderCode}`);
    }

    useEffect(() => {
        dispatch(callOrdersAPI({currentPage}));
    }, [currentPage]);

    useEffect(() => {
        if (orders.data) {
            // orders.data가 변경될 때마다 정렬
            const sortedData = orders.data.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate));
            setSortedOrders(sortedData);
        }
    }, [orders.data]); // orders.data가 변경될 때마다 정렬

    const orderData = orders.data

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

    const statuses = [
        {
            name: '주문접수',
            // count: 0
            count: filteredOrderData ? filteredOrderData.reduce((acc, order) => acc + (order.storeOrders ? order.storeOrders.filter(storeOrder => storeOrder.orderStatus === "주문 접수").length : 0), 0) : 0
        },
        {
            name: '상품준비',
            count: filteredOrderData ? filteredOrderData.reduce((acc, order) => acc + (order.storeOrders ? order.storeOrders.filter(storeOrder => storeOrder.orderStatus === "상품 준비").length : 0), 0) : 0
        },
        {
            name: '배송중',
            count: filteredOrderData ? filteredOrderData.reduce((acc, order) => acc + (order.storeOrders ? order.storeOrders.filter(storeOrder => storeOrder.orderStatus === "배송 중").length : 0), 0) : 0
        },
        {
            name: '배송완료',
            count: filteredOrderData ? filteredOrderData.reduce((acc, order) => acc + (order.storeOrders ? order.storeOrders.filter(storeOrder => storeOrder.orderStatus === "배송 완료").length : 0), 0) : 0
        },
        {
            name: '구매확정',
            count: filteredOrderData ? filteredOrderData.reduce((acc, order) => acc + (order.storeOrders ? order.storeOrders.filter(storeOrder => storeOrder.orderStatus === "주문 확정").length : 0), 0) : 0
        }
    ];

    return(
        orders &&
        <>
            <Container>
                <div className="mt-4 fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">주문∙배송 목록</div>
                <div className="mt-5 mb-5">
                    <StatusTracker statuses={statuses} />
                </div>

                {orderData && orderData.map((order) => (
                    <div key={order.orderCode} className="mb-4 mt-5">
                        <Card.Body>
                            <Row className="align-items-center">
                                <Col>
                                    <div className="order-date-title">
                                        {order.orderDate} 주문 (주문번호 : {order.orderCode}) | {order.orderName}
                                    </div>
                                </Col>
                                <Col className="d-flex justify-content-end">
                                    <Button
                                        variant="outline-success" style={{borderColor: 'transparent'}}
                                        onClick={e => {
                                            onClickOrderDetailsHandler(order);
                                        }}>주문상세 >
                                    </Button>
                                </Col>
                            </Row>
                            <Order
                                orderCode={order.orderCode} // orderCode 전달
                                storeOrders={order.storeOrders}
                                topButtonNames={["승인", "거절"]}
                                bottomButtonNames={[""]}
                                buttonOrderStatus={""}
                                buttonOnClickEvent={handleButtonClick} // 함수 전달
                            />
                        </Card.Body>
                    </div>
                ))}
            </Container>
        </>
    );
}

export default MemberOrderList;