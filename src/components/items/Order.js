import React from 'react';
import { Row, Col, Image, Card } from 'react-bootstrap';
import StatusButton from "../common/StatusButton";

const Order = ({ orderCode, storeOrders, topButtonNames, bottomButtonNames, buttonOrderStatus, buttonOnClickEvent }) => {
    const shouldShowTopButton = (storeOrder) => {
        return topButtonNames.length > 0 && storeOrder.orderStatus === buttonOrderStatus;
    };

    const shouldShowBottomButton = (storeOrder) => {
        return bottomButtonNames.length > 0 && storeOrder.orderStatus === buttonOrderStatus;
    };

    const shouldbuttonVariant = (buttonName) => {
        if (buttonName === "승인" || buttonName === "발송 처리") {
            return "outline-success";
        } else if (buttonName === "거절") {
            return "outline-danger";
        } else {
            return "outline-secondary";
        }
    };

    // storeCode로 storeOrders 그룹화
    const groupedOrders = storeOrders.reduce((acc, storeOrder) => {
        const { storeCode } = storeOrder;
        if (!acc[storeCode]) {
            acc[storeCode] = [];
        }
        acc[storeCode].push(storeOrder);
        return acc;
    }, {});

    return (
        <>
            {Object.keys(groupedOrders).map((storeCode) => (
                <div key={storeCode} className="mt-3">
                    {groupedOrders[storeCode].map((storeOrder, orderIndex) => (
                        <div key={storeOrder.storeOrderCode}>
                            {/* 첫 번째 주문에서만 스토어 이름과 상태를 표시 */}
                            {orderIndex === 0 && (
                                <div className="d-flex light-green-bg justify-content-between align-items-center">
                                    <div>
                                        {storeOrder.storeName} ({storeOrder.orderStatus})
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        {topButtonNames.length > 0 && topButtonNames.map((buttonName, index) => (
                                            buttonName && shouldShowTopButton(storeOrder) && (
                                                <StatusButton
                                                    key={index}
                                                    buttonName={buttonName}
                                                    buttonVariant={shouldbuttonVariant(buttonName)}
                                                    showButton={true}
                                                    onClick={() => buttonOnClickEvent(orderCode, storeOrder.storeOrderCode, buttonName)} // 버튼 클릭 이벤트 수정
                                                />
                                            )
                                        ))}
                                    </div>
                                </div>
                            )}
                            <Card>
                                {storeOrder.orderDetails.map((orderDetail, index) => (
                                    <div key={orderDetail.orderDetailCode}>
                                        <Row className="align-items-center" key={orderDetail.productCode}>
                                            <Col md={2} className="text-center m-3">
                                                <Image className="square-img"
                                                       src={orderDetail.productImg} fluid
                                                       alt={orderDetail.productName} />
                                            </Col>
                                            <Col md={5}>
                                                <div>
                                                    <Card.Title>{orderDetail.productName}</Card.Title>
                                                    <Card.Text>{orderDetail.optionName}</Card.Text>
                                                    <Card.Text>가격 {orderDetail.optionPrice} ·
                                                        수량 {orderDetail.orderQuantity}</Card.Text>
                                                </div>
                                            </Col>
                                            {index === 0 && (
                                                <Col className="d-flex justify-content-end">
                                                    {bottomButtonNames.length > 0 && bottomButtonNames.map((buttonName, index) => (
                                                        buttonName && shouldShowBottomButton(storeOrder) && (
                                                            <StatusButton
                                                                key={index}
                                                                buttonName={buttonName}
                                                                buttonVariant={shouldbuttonVariant(buttonName)}
                                                                showButton={true}
                                                                onClick={() => buttonOnClickEvent(orderCode, storeOrder.storeOrderCode, buttonName)} // 버튼 클릭 이벤트 수정
                                                            />
                                                        )
                                                    ))}
                                                </Col>
                                            )}
                                        </Row>
                                    </div>
                                ))}
                            </Card>
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
};

export default Order;