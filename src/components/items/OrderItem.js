import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';

const OrderItem = ({ item }) => {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Row>
                    <Col md={2}>
                        <Image src={item.imageUrl} fluid />
                    </Col>
                    <Col md={10}>
                        <h5>{item.name}</h5>
                        <p>색상: {item.color}</p>
                        <p>가격: {item.price}원</p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default OrderItem;