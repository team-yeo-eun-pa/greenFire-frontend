import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from 'react-router-dom';
import {callOrdersAPI, callStoreOrdersAPI} from "../../apis/OrderAPICalls";
import Order from "../../components/items/Order";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import Summary from "../../components/items/Summary";
import StatusTracker from "../../components/items/StatusTracker";

function StoreOrderList() {

    const { storeCode } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentPage,setCurrentPage] = useState(1);
    const orders = useSelector(state => state.orderReducer.orders) || [];

    const onClickOrderDetailsHandler = (order) => {
        console.log(order);
        navigate(`${order.orderCode}`);
    }

    useEffect(() => {
        dispatch(callStoreOrdersAPI({ currentPage, storeCode:8 }));
    }, [currentPage, storeCode, dispatch]);

    const orderData = orders.data

    const statuses = [
        {
            name: '신규주문',
            count: orderData ? orderData.reduce((acc, order) => acc + (order.storeOrders ? order.storeOrders.filter(storeOrder => storeOrder.orderStatus === "주문 접수").length : 0), 0) : 0
        },
        {
            name: '상품준비',
            count: orderData ? orderData.reduce((acc, order) => acc + (order.storeOrders ? order.storeOrders.filter(storeOrder => storeOrder.orderStatus === "상품 준비").length : 0), 0) : 0
        },
        {
            name: '배송중',
            count: orderData ? orderData.reduce((acc, order) => acc + (order.storeOrders ? order.storeOrders.filter(storeOrder => storeOrder.orderStatus === "배송 중").length : 0), 0) : 0
        },
        {
            name: '배송완료',
            count: orderData ? orderData.reduce((acc, order) => acc + (order.storeOrders ? order.storeOrders.filter(storeOrder => storeOrder.orderStatus === "배송 완료").length : 0), 0) : 0
        },
        {
            name: '구매확정',
            count: orderData ? orderData.reduce((acc, order) => acc + (order.storeOrders ? order.storeOrders.filter(storeOrder => storeOrder.orderStatus === "주문 확정").length : 0), 0) : 0
        }
    ];

    return(
        orders &&
        <>
            <Container>
                <div className="mt-4 fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">주문∙결제 내역</div>
                <div className="mt-5 mb-5">
                    <StatusTracker statuses={statuses}/>
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
                                storeOrders={order.storeOrders}
                                topButtonNames={[""]}
                                bottomButtonNames={[""]}
                                buttonOrderStatus={""}
                            />
                        </Card.Body>
                    </div>
                ))}
            </Container>
        </>
    );
}

export default StoreOrderList;