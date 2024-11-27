import React, { useState, useEffect } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import DeliveryAddressModal from '../../components/items/DeliveryAddressModal';
import DeliveryInfo from '../../components/items/DeliveryInfo';
import OrderSummary from '../../components/items/OrderSummary';
import OrderItems from '../../components/items/OrderItems';
import CouponSelector from '../../components/items/CouponSelector';
import { callOrderRegistAPI } from '../../apis/OrderAPICalls';
import {callDeliveryAddressRegistAPI} from "../../apis/AddressAPICalls";

function OrderRegistration() {
    const location = useLocation();
    const { productData } = location.state;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { orderData } = useSelector(state => state.orderReducer) || {};

    const deliveryAddresses = useSelector(state => state.addressReducer.address);
    // const defaultAddress = deliveryAddresses && deliveryAddresses.find(address => address.isOrdinaryAddress);

    // console.log("defaultAddress.deliveryAddressCode",defaultAddress.deliveryAddressCode)

    const [form, setForm] = useState({
        deliveryAddressCode: '',
        receiverName: '김초록',
        contactNumber: '01012345678',
        address: '서울특별시 종로구 인사동길 12',
        addressDetail: '',
        deliveryRequest: '',
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

    const optionCodes = productData && productData.option ? [productData.option.optionCode] : [];

    console.log("optionCodes",optionCodes)
    console.log("productData.productOptions",productData.productOptions)
    console.log("productData.option.optionCode",productData.option.optionCode)
    console.log("productData",productData)

    const handleCheckout = () => {
        if (!productData || !productData.product || !productData.option) {
            console.error("Invalid productData structure", productData);
            return;
        }

        const orderRequest = {
            // deliveryAddressCode: defaultAddress.deliveryAddressCode,
            deliveryAddressCode: 24,
            storeOrders: [
                {
                    storeCode: productData.product.storeCode,
                    orderDetails: [
                        {
                            optionCode: productData.option.optionCode,
                            optionPrice: productData.option.optionPrice,
                            orderQuantity: productData.amount
                        }
                    ]
                }
            ]
        };

        dispatch(callOrderRegistAPI({ orderRequest }))
            .then(response => {
                const orderCode = response.orderCode;
                const orderName = response.orderName;
                navigate('/payment', {
                    state: {
                        orderData: response
                    }
                });
            })
            .catch(error => {
                console.error("Failed to register order:", error);
            });
    };


    return (
            <Container>
            <h4>주문/결제</h4>
            <Row className="mt-4">
                <Col md={8}>
                    <DeliveryInfo
                        form={form}
                        onChangeHandler={onChangeHandler}
                    />
                    <div className="d-flex justify-content-end m-3">
                        <Button variant="outline-success" className="btn-md mx-1" onClick={handleShow}>
                            배송지 변경
                        </Button>
                    </div>
                    <DeliveryAddressModal
                        show={showModal}
                        handleClose={handleClose}
                    />
                    <OrderItems optionCodes={optionCodes} amount={productData.amount} />
                    {/*<CouponSelector />*/}
                </Col>
                <Col md={4}>
                    <OrderSummary
                        totalAmount={productData ? (productData.option.optionPrice * productData.amount): 0 }
                        deliveryFee={3000}
                        handleCheckout={handleCheckout}
                    />
                    <Button variant="success" className="w-100" onClick={handleCheckout}>
                        {(productData.option.optionPrice * productData.amount + 3000).toLocaleString()}원 결제하기
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default OrderRegistration;