import React from 'react';
import { Row, Col, Image, Card } from 'react-bootstrap';

const OrderItem = ({ item }) => {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Row className="align-items-center">
                    <Col md={2} className="text-center m-3">
                        <Image className="square-img"
                               src={item.imageUrl} fluid
                               alt={item.name} />
                    </Col>
                    <Col md={5}>
                        <div>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>색상: {item.color}</Card.Text>
                            <Card.Text>가격 {item.price}원</Card.Text>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default OrderItem;