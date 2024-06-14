import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import StatusButton from "../common/StatusButton";

function OrderItems() {


    const items = [
        {
            optionCode:1,
            productCode: 1,
            name: '민들레로 만든 양말',
            option: '색상: 하얀색',
            price: 30000,
            imgSrc: '/path/to/image1.jpg'
        },
        {
            optionCode:1,
            productCode: 2,
            name: '종이로 만든 양말',
            option: '색상: 하얀색',
            price: 30000,
            imgSrc: '/path/to/image2.jpg'
        }
    ];

    return (
        <Card className=" border-0">
            <div className="mt-4 fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">주문상품 {items.length}건</div>
            <Card.Body>
                {items.map(item  => (
                    <Card>
                    <div key={item.optionCode}>
                        <Row className="align-items-center" key={item.productCode}>
                            <Col md={2} className="text-center m-3">
                                <Image className="square-img"
                                       src={item.productImg} fluid
                                       alt={item.name} />
                            </Col>
                            <Col md={5}>
                                <div>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>{item.option}</Card.Text>
                                    <Card.Text>{item.price}원</Card.Text>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    </Card>
                ))}
            </Card.Body>
        </Card>
    );
}

export default OrderItems;

// {storeOrder.orderDetails.map((orderDetail, index) => (
//     <div key={orderDetail.orderDetailCode}>
//         <Row className="align-items-center" key={orderDetail.productCode}>
//             <Col md={2} className="text-center m-3">
//                 <Image className="square-img"
//                        src={orderDetail.productImg} fluid
//                        alt={orderDetail.productName} />
//             </Col>
//             <Col md={5}>
//                 <div>
//                     <Card.Title>{orderDetail.productName}</Card.Title>
//                     <Card.Text>{orderDetail.optionName}</Card.Text>
//                     <Card.Text>가격 {orderDetail.optionPrice} ·
//                         수량 {orderDetail.orderQuantity}</Card.Text>
//                 </div>
//             </Col>
//         </Row>
//     </div>
// ))}