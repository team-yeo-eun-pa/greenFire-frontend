import React, { useEffect } from 'react';
import { Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { callGetDeliveryAddressesAPI } from '../../apis/AddressAPICalls';
import {useNavigate} from "react-router-dom";

function DeliveryInfo({ form, onChangeHandler }) {
    const dispatch = useDispatch();
    const deliveryAddresses = useSelector(state => state.addressReducer.address);
    const defaultAddress = deliveryAddresses && deliveryAddresses.find(address => address.isOrdinaryAddress);
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(callGetDeliveryAddressesAPI({}));
    }, [dispatch]);



    console.log("address : ", deliveryAddresses);
    console.log("defaultAddress : ", defaultAddress);

    return (

        defaultAddress &&

        <Card className=" border-0">
            <div className="mt-4 fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">배송지</div>
            <Card.Body>
                {defaultAddress ? (
                    <>
                        <p className="fs-4 mt-3">{defaultAddress.deliveryAddressName}</p>
                        <p className="fs-5">{defaultAddress.address} {defaultAddress.addressDetail}</p>
                        <p className="fs-6">{defaultAddress.receiverName} {defaultAddress.contactNumber}</p>
                        <p className="fs-7">배송 요청사항: {defaultAddress.contactNumber}</p>
                    </>
                ) : (
                    <p>기본 배송지가 설정되지 않았습니다.</p>
                )}
            </Card.Body>
        </Card>
    );
}

export default DeliveryInfo;