import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { callStoreOrderByOrderStatusAPI } from "../../apis/OrderAPICalls";
import Order from "../../components/items/Order";
import { Card, Col, Container, Row } from "react-bootstrap";
import Summary from "../../components/items/Summary";
import DeliveryModal from "../../components/items/DeliveryModal";
import StatusButton from "../../components/common/StatusButton";

function OrderShippingHandler() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const orders = useSelector(state => state.orderReducer.orders) || [];
    const [showDeliveryModal, setShowDeliveryModal] = useState(false);
    const [selectedStoreOrderCode, setSelectedStoreOrderCode] = useState(null);
    const [selectedOrderCode, setSelectedOrderCode] = useState(null);

    const { storeCode } = useParams();
    // const orderStatus = ["상품 준비", "배송 중", "배송 완료"];
    const orderStatus = ["상품 준비"];

    useEffect(() => {
        dispatch(callStoreOrderByOrderStatusAPI({ currentPage, storeCode: 8, orderStatus }));
    }, [currentPage, storeCode, dispatch]);

    const orderData = orders.data;

    console.log("orderData", orderData);

    // 주문 상태 수정 함수 추가
    const handleButtonClick = (orderCode, storeOrderCode, buttonName) => {
        if (buttonName === "발송 처리") {
            setSelectedOrderCode(orderCode);
            setSelectedStoreOrderCode(storeOrderCode);
            setShowDeliveryModal(true);
        }
    };

    // 주문 요약 정보를 위한 데이터 준비
    const summaryData = [
        {
            title: "상품 준비(미발송)",
            count: orderData ? orderData.reduce((acc, order) => acc + (order.storeOrders ? order.storeOrders.filter(storeOrder => storeOrder.orderStatus === "상품 준비").length : 0), 0) : 0
        },
        {
            title: "발송완료",
            count: orderData ? orderData.reduce((acc, order) => acc + (order.storeOrders ? order.storeOrders.filter(storeOrder => storeOrder.orderStatus === "배송 완료").length : 0), 0) : 0
        }
    ];

    // 설명 텍스트 준비
    const description = [
        "✔ 이미 발송 처리한 주문 건의 택배사/송장번호를 수정할 수 있습니다.",
        " ∙ 수정 시 구매자의 결제내역에 수정된 배송정보로 노출됩니다.",
        " ∙ 송장수정은 주문상태가 '배송중'인 경우에만 가능하며, '배송완료' 상태에서는 수정이 불가합니다."
    ];

    // 드롭다운 아이템 목록 준비
    const dropdownItems = [
        { key: "1", label: "추천순" },
        { key: "2", label: "최신순" },
        { key: "3", label: "낮은가격순" },
        { key: "4", label: "높은가격순" },
        { key: "5", label: "판매량순" },
    ];

    return (
        orders && (
            <Container>
                <div className="mt-4 fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">배송 관리</div>
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
                                    orderCode={order.orderCode}
                                    storeOrders={order.storeOrders}
                                    topButtonNames={["발송 처리"]}
                                    bottomButtonNames={[""]}
                                    buttonOrderStatus={"상품 준비"}
                                    buttonOnClickEvent={handleButtonClick} // 함수 전달
                                />
                            </Card.Body>
                        </div>
                    ))}
                <DeliveryModal
                    show={showDeliveryModal}
                    handleClose={() => setShowDeliveryModal(false)}
                    orderCode={selectedOrderCode} // orderCode 전달
                    storeOrderCode={selectedStoreOrderCode} // storeOrderCode 전달
                />
            </Container>
        )
    );
}

export default OrderShippingHandler;