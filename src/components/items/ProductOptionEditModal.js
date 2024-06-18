import {Form, Modal} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {callSellerOptionModifyAPI, callSellerProductModifyAPI} from "../../apis/ProductAPI";

function ProductOptionEditModal({option, open, close, optionForm, setOptionForm}) {

    const dispatch = useDispatch();

    const onChangeHandler = e => {
        setOptionForm && setOptionForm({
            ...optionForm,
            [e.target.name]: e.target.value

        })
    }




    useEffect(() => {
        if (option) {
            setOptionForm({
                optionName: option.optionName,
                optionPrice: option.optionPrice,
                optionStock: option.optionStock
            });
        }
    }, [option]);


    /* 내용 저장 */

    // const submitModifyOptionHandler = () => {
    //     const formData = new FormData();
    //     formData.append('productOptionUpdateRequest', new Blob([JSON.stringify(optionForm)], { type : 'application/json'}));
    //     dispatch(callSellerOptionModifyAPI({ optionCode: option.optionCode, modifyRequest : formData }));
    // }

    const submitModifyOptionHandler = () => {
        const formData = new FormData();
        formData.append('productOptionUpdateRequest', new Blob([JSON.stringify(optionForm)], { type: 'application/json' }));

        dispatch(callSellerOptionModifyAPI({
            optionCode: option.optionCode,
            modifyRequest: formData
        }));
        close();
    };

    return (
        <Modal className="wish-cart-modal" show={open} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>옵션 수정</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="option-info-form" controlId="optionName">
                    <Form.Label>옵션명</Form.Label>
                    <Form.Control
                        type="text"
                        value={optionForm ? setOptionForm.optionName : ''}
                        onChange={(e) => setOptionForm({ ...optionForm, optionName: e.target.value})}
                    />
                </Form.Group>

                <Form.Group className="option-info-form" controlId="optionPrice">
                    <Form.Label>옵션가격</Form.Label>
                    <Form.Control
                        type="number"
                        value={optionForm ? setOptionForm.optionPrice : ''}
                        onChange={(e) => setOptionForm({ ...optionForm, optionPrice: e.target.value})}
                    />
                </Form.Group>

                <Form.Group className="option-info-form" controlId="optionStock">
                    <Form.Label>재고</Form.Label>
                    <Form.Control
                        type="number"
                        value={optionForm ? setOptionForm.optionStock : ''}
                        onChange={(e) => setOptionForm({ ...optionForm, optionStock: e.target.value})}
                    />
                </Form.Group>
            </Modal.Body>

            <Modal.Footer>
                <button className="modal-submit-btn" onClick={()=>{
                    close();
                    submitModifyOptionHandler();
                }}>
                    확인
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default ProductOptionEditModal;