import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { callModifyOrderStatusAndDeliveryRegistAPI } from '../../apis/OrderAPICalls';

function DeliveryModal({ show, handleClose, orderCode, storeOrderCode }) {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        deliveryCompany: '',
        transportNumber: '',
        deliveryType: 'STANDARD'
    });

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onClickDeliveryHandler = () => {
        const { deliveryCompany, transportNumber, deliveryType } = form;
        dispatch(callModifyOrderStatusAndDeliveryRegistAPI({ orderCode, storeOrderCode, deliveryCompany, transportNumber, deliveryType }))
            .then(response => {
                console.log("Delivery information registered:", response);
                handleClose();
            })
            .catch(error => {
                console.error("Failed to register delivery information:", error);
            });
    };

    return (
        <Modal show={show} onHide={handleClose} className="mt-5">
            <Modal.Header closeButton className="border-0">
                <Modal.Title>발송 처리</Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-5">
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>택배사</Form.Label>
                        <Form.Select name="deliveryType" onChange={onChangeHandler} value={form.deliveryType}>
                            <option value="우체국">우체국</option>
                            <option value="GS 택배">GS 택배</option>
                            <option value="하이 택배">하이 택배</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>송장번호</Form.Label>
                        <Form.Control name="transportNumber" onChange={onChangeHandler} type="text" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className="d-flex flex-column align-items-center justify-content-center border-0">
                <Button
                    variant="success"
                    style={{ cursor: 'pointer' }}
                    className="w-75 my-2"
                    onClick={onClickDeliveryHandler}
                >
                    발송 처리
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeliveryModal;