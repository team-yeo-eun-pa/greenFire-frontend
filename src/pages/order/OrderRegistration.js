import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import DeliveryInfo from './DeliveryInfo';
import OrdererInfo from './OrdererInfo';
import OrderItems from './OrderItems';
import OrderSummary from './OrderSummary';
import PaymentMethod from './PaymentMethod';

const OrderRegistration = () => {
    const [form, setForm] = useState({
        deliveryRequest: '',
        ordererName: '',
        ordererEmail: '',
        emailDomain: 'naver.com',
        phoneFirstPart: '010',
        phoneMiddlePart: '',
        phoneLastPart: '',
        coupon: '',
        paymentMethod: ''
    });

    const items = [
        { name: '민들레로 만든 양말', color: '화이트', price: '30,000', imageUrl: '/images/socks_white.jpg' },
        { name: '종이로 만든 양말', color: '레인보우', price: '30,000', imageUrl: '/images/socks_rainbow.jpg' }
    ];

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const totalAmount = items.reduce((acc, item) => acc + parseInt(item.price.replace(/,/g, '')), 0);
    const deliveryFee = 6000;
    const finalAmount = totalAmount + deliveryFee;

    return (
        <Container>
            <h2 className="my-4">주문/결제</h2>
            <Row>
                <Col lg={8}>
                    <DeliveryInfo form={form} onChangeHandler={onChangeHandler} />
                    <OrdererInfo form={form} onChangeHandler={onChangeHandler} />
                    <OrderItems items={items} />
                    <Form.Group className="mb-3">
                        <Form.Label>쿠폰</Form.Label>
                        <Form.Control as="select" name="coupon" onChange={onChangeHandler}>
                            <option value="">사용하실 쿠폰을 선택해주세요.</option>
                            <option value="discount10">10% 할인 쿠폰</option>
                            <option value="freeship">무료 배송 쿠폰</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <OrderSummary totalAmount={totalAmount} deliveryFee={deliveryFee} finalAmount={finalAmount} />
                    <PaymentMethod onChangeHandler={onChangeHandler} />
                </Col>
            </Row>
        </Container>
    );
};

export default OrderRegistration;