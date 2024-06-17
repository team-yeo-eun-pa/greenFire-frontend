import {Form, Modal} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {callSellerOptionModifyAPI} from "../../apis/ProductAPI";

function ProductOptionEditModal(props) {

    const dispatch = useDispatch();

    const onChangeHandler = e => {
        props.setOptionForm && props.setOptionForm({
            ...props.optionForm,
            [e.target.name]: e.target.value

        })
    }


    useEffect(() => {
        if (props.option) {
            props.setOptionForm({
                optionName: props.option.optionName,
                optionPrice: props.option.optionPrice,
                optionStock: props.option.optionStock
            });
        }
    }, [props.option]);

    const handleEditOption = async () => {
        const modifyRequest = new FormData();
        modifyRequest.append('ProductOptionUpdateRequest', modifyRequest);

        try {
            await dispatch(callSellerOptionModifyAPI({
                productCode: props.option.productCode,
                optionCode: props.option.optionCode,
                modifyRequest
            }));
            props.handleClose();
        } catch (error) {

        }
    };

    return (
        <Modal className="wish-cart-modal" show={props.open} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>옵션 수정</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="option-info-form" controlId="optionName">
                    <Form.Label>옵션명</Form.Label>
                    <Form.Control
                        type="text"
                        value={props.optionForm ? props.setOptionForm.optionName : ''}
                        onChange={(e) => props.setOptionForm({ ...props.optionForm, optionName: e.target.value})}
                    />
                </Form.Group>

                <Form.Group className="option-info-form" controlId="optionPrice">
                    <Form.Label>옵션가격</Form.Label>
                    <Form.Control
                        type="number"
                        value={props.optionForm ? props.setOptionForm.optionPrice : ''}
                        onChange={(e) => props.setOptionForm({ ...props.optionForm, optionPrice: e.target.value})}
                    />
                </Form.Group>

                <Form.Group className="option-info-form" controlId="optionStock">
                    <Form.Label>재고</Form.Label>
                    <Form.Control
                        type="number"
                        value={props.optionForm ? props.setOptionForm.optionStock : ''}
                        onChange={(e) => props.setOptionForm({ ...props.optionForm, optionStock: e.target.value})}
                    />
                </Form.Group>
            </Modal.Body>

            <Modal.Footer>
                <button className="modal-submit-btn" onClick={()=>{
                    props.handleClose();
                    props.submitAddOptionHandler();
                }}>
                    확인
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default ProductOptionEditModal;