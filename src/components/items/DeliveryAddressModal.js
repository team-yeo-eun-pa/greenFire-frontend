import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { callDeliveryAddressRegistAPI } from '../../apis/AddressAPICalls';

function DeliveryAddressModal({ show, handleClose, handleAddressRegist }) {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        deliveryAddressName: '',
        receiverName: '',
        contactNumber: '',
        addressZonecode: '',
        addressType: '도로명 주소',
        address: '',
        addressDetail: '',
        deliveryRequest: '',
        isOrdinaryAddress: false
    });

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onCheckHandler = () => {
        setForm({
            ...form,
            isOrdinaryAddress: !form.isOrdinaryAddress
        });
    };

    const onClickSaveHandler = () => {
        dispatch(callDeliveryAddressRegistAPI({ deliveryAddressRequest: form }))
            .then(response => {
                console.log("Delivery address registered:", response);
                // handleAddressRegist(response); // handleAddressRegist 호출
                handleClose();
            })
            .catch(error => {
                console.error("Failed to register delivery address:", error);
            });
    };

    return (
        <Modal show={show} onHide={handleClose} className="mt-5">
            <Modal.Header closeButton className="border-0">
                <Modal.Title>배송지 등록</Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-5">
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>배송지 이름</Form.Label>
                        <Form.Control name="deliveryAddressName" onChange={onChangeHandler} type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>받는 사람</Form.Label>
                        <Form.Control name="receiverName" onChange={onChangeHandler} type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>전화번호</Form.Label>
                        <Form.Control name="contactNumber" onChange={onChangeHandler} type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>우편번호</Form.Label>
                        <Form.Control name="addressZonecode" onChange={onChangeHandler} type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>주소 타입</Form.Label>
                        <Form.Select name="addressType" onChange={onChangeHandler} value={form.addressType}>
                            <option value="도로명 주소">도로명</option>
                            <option value="지번 주소">지번 주소</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>주소</Form.Label>
                        <Form.Control name="address" onChange={onChangeHandler} type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>상세 주소</Form.Label>
                        <Form.Control name="addressDetail" onChange={onChangeHandler} type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>배송 요청사항</Form.Label>
                        <Form.Control name="deliveryRequest" onChange={onChangeHandler} type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check
                            type="checkbox"
                            label="기본 배송지로 설정"
                            checked={form.isOrdinaryAddress}
                            onChange={onCheckHandler}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className="d-flex flex-column align-items-center justify-content-center border-0">
                <Button
                    variant="success"
                    style={{ cursor: 'pointer' }}
                    className="w-75 my-2"
                    onClick={onClickSaveHandler}
                >
                    저장
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeliveryAddressModal;