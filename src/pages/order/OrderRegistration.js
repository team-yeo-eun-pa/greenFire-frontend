import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import DeliveryAddressModal from '../../components/items/DeliveryAddressModal';
import DeliveryInfo from '../../components/items/DeliveryInfo';
import OrderSummary from '../../components/items/OrderSummary';
import OrderItems from '../../components/items/OrderItems';
import CouponSelector from '../../components/items/CouponSelector';
import {CheckoutPage} from "../payment/CheckoutPage";
import StatusButton from "../../components/common/StatusButton";

function OrderRegistration() {
    const [form, setForm] = useState({
        deliveryRequest: '',
        receiverName: '김초록',
        contactNumber: '010-1234-5678',
        address: '서울특별시 종로구 인사동길 12',
        addressDetail: '',
    });

    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Container>
            <h4>주문/결제</h4>
            <Row className="mt-4">
                <Col md={8}>
                    <DeliveryInfo form={form} onChangeHandler={onChangeHandler}/>
                    {/*<div className="fw-semibold border-bottom border-2 border-dark-subtle p-2"></div>*/}
                    {/*<div className="d-flex justify-content-end m-3">*/}
                    {/*    <Button variant="outline-success" className="btn-md mx-1" onClick={handleShow}>*/}
                    {/*        배송지 변경*/}
                    {/*    </Button>*/}
                    {/*</div>*/}
                    <DeliveryAddressModal show={showModal} handleClose={handleClose}/>
                    <OrderItems/>
                    <CouponSelector/>
                </Col>
                <Col md={4}>
                    <OrderSummary totalAmount={60000} deliveryFee={6000} finalAmount={66000}/>
                </Col>
            </Row>
        </Container>
    );
}

export default OrderRegistration;