import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import {callOrdersAPI} from "../../apis/OrderAPICalls";
import Order from "../../components/items/Order";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

function MemberOrderList() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentPage,setCurrentPage] = useState(1);
    const orders = useSelector(state => state.orderReducer.orders) || [];

    const onClickOrderDetailsHandler = (order) => {
        console.log(order);
        navigate(`${order.orderCode}`);
    }

    useEffect(() => {
        dispatch(callOrdersAPI({currentPage}));
    }, [currentPage]);

    const orderData = orders.data

    return(
        orders &&
        <>


            <Container>
                <div className="mt-4 fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">주문∙배송 목록</div>

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
                            <Order storeOrders={order.storeOrders} buttonNames={["승인","거절"]} buttonOrderStatus={"주문 접수"}/>
                        </Card.Body>
                    </div>
                ))}
            </Container>
        </>
    );
}

export default MemberOrderList;