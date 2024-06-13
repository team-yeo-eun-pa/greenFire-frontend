import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from 'react-router-dom';
import {callOrdersAPI, callStoreOrdersAPI} from "../../apis/OrderAPICalls";
import Order from "../../components/items/Order";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import Summary from "../../components/items/Summary";

function StoreOrderList() {

    const { storeName } = useParams();
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

    // 주문 요약 정보를 위한 데이터 준비
    const summaryData = [
        {
            title: "주문 접수",
            count: 0

        },
        {
            title: "상품 준비",
            count: 0
        },
        {
            title: "배송 중",
            count: 0
        },
        {
            title: "주문 완료",
            count: 0
        },
        {
            title: "주문 확정",
            count: 0
        }
    ];

    // 설명 텍스트 준비
    const description = [
        " "
    ];

    return(
        orders &&
        <>
            <Container>
                <div className="mt-4 fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">주문∙결제 내역</div>

                <Summary summaryData={summaryData} description={description} />

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